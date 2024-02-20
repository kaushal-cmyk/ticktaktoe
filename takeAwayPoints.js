/* 
Day 1
    => a react variable can store tag.
    => We can implement javascript operation inside tag using{}
    => there must be only one wrapper in return 
    => anything that is written inside return will display in the browser

    Block element
    => it takes all the width 
    => it always starts from new line

    Inline element 
    => it takes required width

    <a> tag
    <a href = "http://facebook.com " target = " ">facebook</a>

    Image
    => always place images and files in public folder
    => . at src images refers to public folder 

    CSS
    =>Inline
        obj is used for styling purposes
        you must use camel case convention
    =>External
        it is a three step process
        = define
        = import 
        = use
    => In react console will appear at browser's developer panel

    ------------------------------------------------------------
Day 2
    Component
    => It is a function whose first letter is capital
    => We call component like html tag <>...</>
    => Component are custom tag 

    => if props is other than string wrap it by curly braces{}

    => InBuilt props(className, style) are only used in inbuilt tag but is isn't supported in custom tag(component)

    -------------------------------------------------------------------------------------------------------------
Day 3
    JSX
    => Is stands for javascript extension
    => It is combination of js and xml(html)

    Limitations of curly braces
    => It must return only one value
    => It does not support if-else, do-while, for
    => We cannot define variables inside curly braces

    Limitations of ternary operator
    => It should always contain else(:)
    
    Effects of different data inside html tag

    Boolean are not shown in browser for this we have to add some logic 

    Don't call object inside html tag children
    
    UseState
    => A page will render if state variable changes (i,e: setName)
    => when state variable changed 
    => a component gets rendered such that 
    => the state variable which is changed holds changed values
    => where as other state variable holds previous values 

    UseEffect function
    => It is an asynchronous function.
    => It only execute one times i,e executes only in first render 
    => useEffect function will run for 1st render but from second render the execution will depend on its 
    dependency

    // cleanUp function are those function which is return by useEffect
    // CleanUp function does not execute in first render 
    // but from second render the CleanUp function will execute if useEffect executes
    // What happen when use Effect function is executed
    // => first cleanUp function will run and the code above will be executed

    // When component is unmounted nothing is executed except cleanUp function.

    Life Cycle Of Component
    => Component did mount
        useEffect function will run
    => Component did Update (2nd render) (when state variable changes)
        useEffect function will run if dependency is changed
    => Component did unmount (component is removed)
        nothing gets executed
        but cleanup function is executed.

    Before working with react router dom you have to wrap app component by browse router 

    <input> tag
    In input whatever you place at value it will be display in the browser (input) 

    
    For all 
    value => e.target.value 

    checkbox 
    checked => e.target.checked

    radio
    checked => e.target.checked
    
*/