# Angular Circular Progressbar With Handler

![alt text](https://i.ibb.co/CsbT6Hr/progress.png)

### Just install it and call the module then use the component

```css
<angular-circular-progressbar
[percentage]="30"
[radius]="58"
[bgStrokeColor]="'#EAEAEA'"
[bgStrokeFill]="'transparent'"
[bgStrokeWidth]="5"
[progressStrokeColor]="'#3F8DFC'"
[progressStrokeFill]="'transparent'"
[progressStrokeWidth]="5"
[fontFamily]="'arial'"
[fontSize]="28"
[fontWeight]="700"
[textColor]="'#3F8DFC'"
[handleBorderColor]="'transparent'"
[handleFillColor]="'#3F8DFC'"
[handleRadius]="8"
[clockWise]="true"
[strokeLinecap]="'round'"
[reversedText]="false"
[mutedFontFamily]="'arial'"
[mutedFontSize]="12"
[mutedFontWeight]="400"
[mutedText]="'alt text'"
[mutedTextColor]="'#ccc'"
[defaultShadow]="true"
> </angular-circular-progressbar>
```

### It's already compatible with SSR

for more Info [Angular Circular Progressbar With Handler](https://github.com/shadynoor9/Angular-circular-progressbar)

| Input.              | Type    | Description                                                                              |
| ------------------- | ------- | ---------------------------------------------------------------------------------------- |
| percentage          | number  | the percentage from 100 and zero by defaul                                               |
| radius              | number  | the radius the circules and `required`                                                   |
| width               | any     | if you want specific width for svg or by default it will be (radius x 2.3)               |
| fontSize            | number  | font size of the percentage                                                              |
| fontFamily          | string  | font family for percentage                                                               |
| fontWeight          | number  | font weight for percentage                                                               |
| textColor           | string  | text color of percentage                                                                 |
| bgStrokeColor       | string  | background circle background color                                                       |
| bgStrokeFill        | string  | background circle stroke fill type (color or transparent) it should be transparent       |
| bgStrokeWidth       | number  | background circle stroke width                                                           |
| progressStrokeColor | string  | progress circle background color                                                         |
| progressStrokeFill  | string  | progress circle stroke fill type (color or transparent) it should be transparent         |
| progressStrokeWidth | number  | progress circle stroke width                                                             |
| handleRadius        | number  | handler circle radius                                                                    |
| handleBorderWidth   | number  | handler circle stroke width incase you want it                                           |
| handleBorderColor   | string  | handler circle stroke color                                                              |
| handleFillColor     | string  | handler circle fill color                                                                |
| mutedText           | string  | alternative text content                                                                 |
| mutedFontFamily     | string  | alternative text font family                                                             |
| mutedTextColor      | string  | alternative text color                                                                   |
| mutedFontSize       | number  | alternative text font size                                                               |
| mutedFontWeight     | number  | alternative text font weight                                                             |
| strokeLinecap       | string  | progress circle stroke type ( butt , round , square )                                    |
| filterValue         | string  | incase you want to add a filter for handler                                              |
| clockWise           | boolean | the direction of the progress bar                                                        |
| reversedText        | boolean | change text direction for percentage                                                     |
| defaultShadow       | boolean | if true it will show a default shadow on handler                                         |
| responsive          | boolean | if true it will multiple every number entered by 0.8 if the width is smaller that 1600px |

Created with love by [Shady Noor](https://github.com/shadynoor)
shadynoor9@gmail.com

If you can improve it just pull it and do push a PR
