# Blazor.SimpleModal

Blazor class library for modal display and interaction with simplicity in mind.

## Getting started

### Add the package
Install the package in your project with the dotnet CLI:

`dotnet add package nich2408.Blazor.SimpleModal`

or with the Package Manager Console:
`Install-Package nich2408.Blazor.SimpleModal`

### Add script tags
Add these script tags in your `App.razor` or `index.html`
```html
<script src="_content/nich2408.Blazor.SimpleModal/modals.js" type="module"></script>
<script src="_content/nich2408.Blazor.SimpleModal/bootstrap-5.1.3.min.js"></script>
```

> :warning: If you are already using boostrap JS script in your project, you can skip adding `<script src="_content/nich2408.Blazor.SimpleModal/bootstrap-5.1.3.min.js"></script>`

Be sure to clean and rebuild the project if you are using Visual Studio and also clean the browser cache if the files are not appearing as sources.

## Usage

### Declaring a modal
Example.razor
```razor
@using Blazor.SimpleModal

[...]

<SimpleModal
  @ref="mySimpleModal"
  Title="This is the title"
  EnableConfirmButton="true"
  EnableDismissButton="true"
  DismissOnOutsideClick="true"
  DismissOnEscapeKey="true">
  <Content>
    Place here the content!
  </Content>
</SimpleModal>
```

Screenshot:

![image](https://github.com/nich2408/Blazor.SimpleModal/assets/98348348/262ae2df-0f5c-4fad-9ad0-1952573d521d)


## Additional documentation
You can change the style of modal including custom buttons CSS classes and texts by changing the related properties of the `SimpleModal` component.

## Feedback
If you want to leave feedback (bugs or discussion) you can open an issue.

## Contributing
Currently the project is not planned to be opened to contribution inside this repository.
