<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/389624564/23.2.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1020314)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Report Viewer for Blazor - Customization API

This project demonstrates how to use API to customize the Report Viewer 'native' server-side Blazor component.

## Overview
The Report Viewer API entry point is the [DxReportViewer](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.DxReportViewer) class. You can specify its properties and handle its events to adjust the Report Viewer appearance and behavior. 

## Example: UI Customization
Related pages: [Toolbar.razor](BlazorCustomization/Pages/Toolbar.razor), [StandAloneParametersPanel.razor](BlazorCustomization/Pages/StandAloneParametersPanel.razor).

The sample code sets the component's initial size and zoom level, adds a custom button to the toolbar, hides the Properties Panel.

The example uses the following properties:

| Property | Result |
|---|---|
| [RootCssClasses](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.DxReportViewer.RootCssClasses) |	Sets the component's height and width to 100%. |
| [Zoom](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.DxReportViewer.Zoom) |	Sets the initial zoom level to 125%. |
| [SizeMode](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.DxReportViewer.SizeMode) |	Specifies the medium size of the Report Viewer visual elements. |
| [TabPanelModel](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.DxReportViewer.TabPanelModel) |	Gets the Parameters tab in the Properties Panel to hide the tab and do not display the panel.|

The example uses the following method:

| Method | Result |
|---|---|
| [ParametersModel.OnSubmitParameters](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.Models.ParametersModel.OnSubmitParameters) |	Applies parameter values and builds the document. |


The following event is handled:

| Event | Result |
|---|---|
| [OnCustomizeToolbar](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.DxReportViewer.OnCustomizeToolbar) |	Adds a custom toolbar button that switches the Report Viewer to full-screen mode. |


## Example: Stand-Alone Parameter Editor
Related page: [StandAloneParametersPanel.razor](BlazorCustomization/Pages/StandAloneParametersPanel.razor).

The sample code creates a custom component that is composed of a combo box and a button. The component allows the user to specify the report parameter value.

The example uses the following properties:

| Property | Result |
|---|---|
| [ParametersModel](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.DxReportViewer.ParametersModel) |	Gets the report parameters model. |
| [ParametersModel.VisibleItems](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.Models.ParametersModel.VisibleItems) |	Provides access to the report parameters that the user can change. |

The example uses the following method:

| Method | Result |
|---|---|
| [OnAfterRender](https://docs.microsoft.com/en-us/aspnet/core/blazor/components/lifecycle?view=aspnetcore-5.0#after-component-render-onafterrenderasync) |	Gets access to the TabPanelModel property. |

The following events are handled:

| Event | Result |
|---|---|
| [OnCustomizeParameters](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.DxReportViewer.OnCustomizeParameters) |	Gets the Parameter model and stores it in a variable. |

## Example: Custom Parameter Editor
Related page: [CustomEditor.razor](BlazorCustomization/Pages/CustomEditor.razor).

The sample code specifies a custom template for the parameter editor in the Parameters panel.

The example uses the following properties:

| Property | Result |
|---|---|
| [ParametersModel](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.DxReportViewer.ParametersModel) |	Gets the report parameters model. |
| [ParametersModel.VisibleItems](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.Models.ParametersModel.VisibleItems)  |	Gets the specified parameter model from the parameter collection. |
| [ParameterModel.ValueTemplate](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.Models.ParameterModel.ValueTemplate) |	Specifies the editor template for the parameter in the current model. |

The following events are handled:

| Event | Result |
|---|---|
| [OnCustomizeParameters](https://docs.devexpress.com/XtraReports/DevExpress.Blazor.Reporting.DxReportViewer.OnCustomizeParameters) |	Retrieves a parameter from the Parameter model and specifies a template for the parameter editor. |

## How to Run the Example

1. Download the project and update the **DevExpress.Blazor.Reporting.Viewer** and **DevExpress.Blazor** NuGet packages.
2. Build and run the project.
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=Reporting-Blazor-Report-Viewer-Customization&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=Reporting-Blazor-Report-Viewer-Customization&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
