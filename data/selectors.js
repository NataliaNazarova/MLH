const elements = {
    "header": "h3",
    "instruction": "p",
    "requiredLabel": ".ant-form-item-required",
    "name": "#name",
    "radioButtons": ".ant-radio",
    "radioButtonsLabel": ".ant-radio-wrapper",
    "age": "#age",
    "storyType": ".ant-select-selector",
    "storyList": ".ant-select-item",
    "imageLabel": ".ant-form-item-label",
    "image": "span.ant-upload",
    "submit": ".ant-btn",
    "tryAgain": ".btn-primary",
    "errorRequired": '//div[contains(@class, "ant-form-item-control")][. //input[@id="name"]]//div[@role="alert"]',
    "errorMessage": '//div[contains(@class, "ant-form-item-control")][. //input[@id="age"]]//div[@role="alert"]'
}

module.exports = elements;
