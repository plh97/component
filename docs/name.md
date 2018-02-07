## 项目命名
`my_project_name`
## 项目目录结构
- ```js
    my_project_name
    |-- config //存放配置以及保密文件
    |-- dist //存放打包后的文件，不打包就不要
    |-- client //存放前端文件
    |   |-- index.html
    |   |-- page_one.html
    |   |-- page_tow.html
    |   |-- common //存放公共文件
    |   |   |-- commonStyle.less
    |   |   |-- iconfont
    |   |   |   |-- ...
    |   |   |   |-- ...
    |   |   |   |-- ...
    |   |-- js
    |   |   |-- index.js
    |   |   |-- page_one.js
    |   |   |-- page_tow.js
    |   |-- less
    |   |   |-- global.less // 入口文件？将全部css打包在一个文件？
    |   |   |-- index.less
    |   |   |-- page_one.less
    |   |   |-- page_tow.less
    |   |-- utils // 自己写的插件或者jq之类
    |   |   |-- jquery.js
    |   |   |-- opera_dom.js
    |-- server //存放后端文件
    ```
## html文件命名
`account_model.html`
## css文件命名
`account_model.css`
## js文件命名
`account_model.js`

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
    - 不允许有空的规则；
        ```css
        style {
            
        }
        ```

    - 去掉数字中不必要的小数点和末尾的0；
        ```css
        style {
            width: 1.0rem;  // bad
            width: 1rem;    // good
        }
        ```

    - 属性值'0'后面不要加单位；
        ```css
        style {
            padding: 0px;   // bad
            padding: 0;     // good
        }
        ```

    - 同个属性不同前缀的写法需要在垂直方向保持对齐，具体参照右边的写法；(交给自动化工具去做这个)
        ```css
        // bad
        ._list_bxrg2_14 {
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;

        // good
        ._list_bxrg2_14 {
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        ```
    - 无前缀的标准属性应该写在有前缀的属性后面；（参考同上）

    - 不要在一个文件里出现两个相同的规则；
        ```css
        // bad 
        style {
            color: red;
            color: red;
        }
        // good 
        style {
            color: red;
        }
        ```
    - 用 border: 0; 代替 border: none;；
        ```css
        // bad 
        style {
            border: 0;
        }
        // good 
        style {
            border: none;
        }
        ```

    - 选择器不要超过4层（在less中如果超过4层应该考虑用嵌套的方式来写）；
        ```css
        // bad
        body div span em i {
            color: red;
        }
        // good 
        body {
            div {
                span {
                    em {
                        i
                    }
                }
            }
        }
        ```

    - 尽量少用'*'选择器。
        ```css
        // bad
        * {
            margin: 0;
            padding: 0;
        }
        // good 
        body, h1, h2, h3, h4, h5, h6, hr, p,blockquote, dl, dt, dd, ul, ol, li, pre,form, fieldset, legend, button, input, textarea, th, td { 
            margin: 0; 
            padding: 0; 
        }
        ```
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