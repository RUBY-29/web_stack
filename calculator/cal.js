class calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
    }
    clear()
    {
        this.currentOperand=''
        this.previousOperand=''
        this.operation =undefined
    }
    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(Number){
        if(number ==='.'&& this.currentOperand.include('.'))return
        this.currentOperand = this.currentOperand.toString()  + number.toString()
    }
    chooseOperation(operation){
        if(this.currentOperand ==='')return
        if(this.previousOperand!==''){
            this.compute()
        }
        this.operation=operation
        this.previousOperand=this.currentOperand
        this.currentOperand=''
    }

    getDisplayNumber(number){
        const stringNumber =number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits =stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay=''
        }
        else{
            integerDisplay = integerDigits.toLocaleString('en',{maximumFractionDigits:0})
        }
        if(decimalDigits !=null){
            return`${integerDigits}.${decimalDigits}`
        }else{
            return integerDisplay
        }
    } 
    updateDisplay()
    {
        this.currentOperandTextElement.innerText =this.getDisplayNumber(this.currentOperand)
        if(this.operation !=null)
        {this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`}
else{
    this.previousOperandTextElement.innerText =''
}   
 }
}
 const numberButtons = document.querySelectorAll('[data-number]')
 const operationButtons = document.querySelectorAll('[data-operation]')
 const equalsButton = document.querySelector('[data-equals]')
 const deleteButton =document.querySelector('[data-delete]')
 const allClearButton = document.querySelector('[data-all-clear]')
 const previousOperandTextElement = document.querySelector('[data-previous-operand]')
 const currentOperandTextElement = document.querySelector('[data-current-operand]')

 const calculator = new calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button =>{
    button.addEventListener('click',() =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click',button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click',button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})

document.addEventListener('keydown',function(event){
    let patternForNumbers = /[0-9]/g;
    let patternForOperators = /[+\-*\/]/g
    if(event.key.match(patternForNumbers)){
        event.preventDefayult();
        calculator.appendNumber(event.key)
        calculator.updateDisplay()
    }

    if(event.key === '.'){
        event.preventDefault();
        calculator.appendNumber(event.key)
        calculator.updateDisplay()
    }
    if(event.key.match(patternForOperators)){
        event.preventDefault()
        calculator.compute()
        calculator.updateDisplay()
    }
    if(event.key === "Backspace")
{
    event.preventDefault();
    calculator.delete()
    calculator.updateDisplay()
}
if(event.key == 'Delete')
{
    event.preventDefault();
    calculator.clear()
    calculator.updateDisplay()
}
})