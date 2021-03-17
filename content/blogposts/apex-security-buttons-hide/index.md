---
title: 'APEX Security: only hiding buttons is not secure'
date: '2021-03-17'
description: 'Don't just hide Buttons when only some authorized users should be able to execute processes in Oracle APEX. Also use the read only functionality where possible.'
slug: 'apex-highlight-values-chips'
titleImage: './apex-security-hiding-buttons.jpg'
titleImageAlt: 'Sign on a wall saying "do not enter"'
titleImageSource: { text: 'Photo by Kyle Glenn', href: 'https://unsplash.com/photos/dGk-qYBk4OA' }
tags: ['APEX', 'Security']
ghCommentsIssueId: 22
keywords:
    - APEX Security
---

In many applications, there are pages that some privileged users are allowed to edit and others are only allowed to read the data. It is fairly easy to implement such authorizations in Oracle APEX.

We can for example hide elements from some users by setting server-side-conditions or authorization schemes. With that save or delete buttons are hidden from unprivileged users and they can't trigger the underlying processes. Or can they?

## Buttons just call apex.submit

Button only serve an UI purpose to make the user aware he can interact with it. After a click, most buttons executes some JavaScript code. By only hiding buttons only the UI trigger to those JavaScript calls is missing but it is still possible to execute that JavaScript manually with the browser console.

```js
apex.submit({ request: 'DELETE' });
```

If you inspect that button in your browser dev tools on the rendered page you can see that call on the `onclick` attribute:

_Screenshot_

`apex.submit` is an alias for `apex.page.submit`, take a look at the [documentation](https://docs.oracle.com/en/database/oracle/application-express/20.2/aexjs/apex.page.html#.submit) for more information.

Buttons in APEX have a distinct name in the Page Designer which is used as a request parameter when the page is submitted. In the processes tab, we can then define which button triggers the process, meaning which request parameter will trigger it.

_screenshot_

## Use server-side conditions and authorization schemes on APEX processes

As stated above everyone can execute that small snippet by themselves. So **hiding the button is no security measure**. What we can do to only allow priviliged users to execute is to put server-side condition or authorization schemes onto the processes in APEX. So if you want to prevent certain users from triggering these processes use these features:

_Screenshot_

## Use read-only on items to prevent session state altering

All APEX items have a read-only option where we can define a server-side condition. This setting is also available on whole regions and the page. Using this will cause the corresponding items to not be displayed as inputs but as just readable text. Also, the state of these values is protected and can't be changed by the user.

If we have a form page that does not have a readonly condition and only the save button is hidden, the user can just enter new values and overwrite the database values by the JS call described on top.

When the items are in a read-only state and the user tries to alter them with JS and submits he will get an error claiming that a session state protection was violated.

```js
$s('P3_SAL', 123);
apex.submit({ request: 'SAVE' });
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fd992868-d028-4e01-8a5e-a148990449af/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fd992868-d028-4e01-8a5e-a148990449af/Untitled.png)

So youre double safe if you use both measurements.

## Validation option on apex.submit

The function apex.submit also has a parameter where you can toggle on and off validations. I thought that maybe you can use that in an unintended way and skip validations.

```js
apex.submit({ request: 'SAVE', validate: false });
```

When creating a validation there is a setting called "always execute" that is **disabled by default**. Its description says: _"Specify whether this validation is always executed. If set to On, this validation is always evaluated, irrespective of the Execute Validations setting defined against the button that submitted the page. If set to Off, this validation is only evaluated if the triggering button has an Execute Validations setting of On."_

I understood it as the validation parameter to apex.submit defines whether the validations are performed. I went ahead to a form page where I was allowed to edit and changed a value in a way that a validation would fail and prevent me from saving it. I saved it with the validate argument set to `false` and to my surprise the validation was still executed.

As the description of the "always execute" option on the validation states there is a "execute validations" setting on the button related to the request. This is **enabled by default** and seems to prevent the validation option of the JS call of apex.submit on a server-side level. So by default, the validate option is ignored by the database.

## Conclusion

Always make sure to set Authorization Schemes and Server-Side-Conditions on APEX Processes where needed. Conditional buttons are still useful but only serve the UI. Where possible also use the read-only options, otherwise the item state could be altered.
