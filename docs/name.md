## 项目命名
`my_project_name`

## css
- #### class,id...
    ```css
    /* class */
    .element-content {
        ...
    }

    /* id */
    #myDialog {
        ...
    }

    /* 变量 */
    $colorBlack: #000;

    /* 函数 */
    @function pxToRem($px) {
        ...
    }

    /* 混合 */
    @mixin centerBlock {
        ...
    }

    /* placeholder */
    %myDialog {
        ...
    }
    ```
- #### 颜色
    ```css
    /* not good */
    .element {
        color: #ABCDEF;
        background-color: #001122;
    }

    /* good */
    .element {
        color: #abcdef;
        background-color: #012;
    }
    ```
- #### 属性简写(除了margin,padding以外，其他不要使用简写)
    ```css
    <!-- margin padding -->
    margin {
        10px 20px 10px 3px
    }
    padding {
        10px 20px 10px 3px
    }

    // flex,transition，background

    // bad 缺乏可读性
    flex-style {
        flex: 1 1 300px;
    }
    // good
    flex-style {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basic: 300px;
    }
    
    /* not good */
    .element {
        transition: opacity 1s linear 2s;
    }

    /* good */
    .element {
        transition-delay: 2s;
        transition-timing-function: linear;
        transition-duration: 1s;
        transition-property: opacity;
    }
    ```
- #### 媒介查询
    尽量将媒体查询的规则靠近与他们相关的规则，不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们。
    
- #### 杂项
    不允许有空的规则；

    元素选择器用小写字母；

    去掉小数点前面的0；

    去掉数字中不必要的小数点和末尾的0；

    属性值'0'后面不要加单位；

    同个属性不同前缀的写法需要在垂直方向保持对齐，具体参照右边的写法；

    无前缀的标准属性应该写在有前缀的属性后面；

    不要在同个规则里出现重复的属性，如果重复的属性是连续的则没关系；

    不要在一个文件里出现两个相同的规则；

    用 border: 0; 代替 border: none;；
    选择器不要超过4层（在scss中如果超过4层应该考虑用嵌套的方式来写）；

    发布的代码中不要有 @import；
    尽量少用'*'选择器。
## javaScript
- #### 变量(使用驼峰命名 nameString)
    ```js
    var myVariable = 'Bob';
    myVariable = 'Steve';
    ```
- #### 函数(使用驼峰命名 nameString)
    ```js
    function addSquares(a,b) {
        function square(x) {
            return x * x;
        }
        return square(a) + square(b);
    };
    // es6
    const addSquares = (a,b) => {
        const square = x => x*x;
        return square(a) + square(b);
    };
    ```
- #### 常量(大写来区分,不可改变)[参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
    ```js
    const MY_FAV = 7;
    ```

- #### class类(首字母大写)[参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
    ```js
    // es6
    class RectangleRange {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }
    function RectangleRange(){}
    RectangleRange.prototype.fangfa = {
        ????
        ????
        ????
    }
    ```

- #### 方法(驼峰命名,参考js自有方法)
    `Object.prototype.hasOwnProperty()`
- #### 文档注释
    ```js
    /**
    * @func
    * @desc 一个带参数的函数
    * @param {string} a - 参数a
    * @param {number} b=1 - 参数b默认值为1
    * @param {string} c=1 - 参数c有两种支持的取值</br>1—表示x</br>2—表示xx
    * @param {object} d - 参数d为一个对象
    * @param {string} d.e - 参数d的e属性
    * @param {string} d.f - 参数d的f属性
    * @param {object[]} g - 参数g为一个对象数组
    * @param {string} g.h - 参数g数组中一项的h属性
    * @param {string} g.i - 参数g数组中一项的i属性
    * @param {string} [j] - 参数j是一个可选参数
    */
    function foo(a, b, c, d, g, j) {
        ...
    }
    ```
#### 参考[mdn](https://developer.mozilla.org/zh-CN/) [腾讯alloyteam团队前端代码规范](https://www.kancloud.cn/digest/code-guide/42604)