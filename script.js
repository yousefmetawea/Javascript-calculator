
const calculatorContainer  =document.getElementById("calculator_container") ; 
const displayArea  =document.getElementById("display_area") ; 


calculatorContainer.addEventListener('click', e=>{
    if(e.target.nodeName== 'BUTTON'){
        switch(e.target.textContent){
            case "C"  :
                clear() ;
                break ; 
            case "DEl" :
                deleteonevalue() ; 
                break ; 
            case "=" :
                evaluate() ; 
                break ; 
            default :
            addToDisplayArea(e.target.textContent) ; 

        }

    }
})


function deleteonevalue(){
    let currentvalue = displayArea.textContent  ;

    displayArea.textContent = currentvalue.substring(0,currentvalue.length-1) ; 
}

function evaluate(){
    try {
        let calculation  = math.evaluate(displayArea.textContent) ; 
        displayArea.textContent = calculation ; 
    } catch (error) {
        displayArea.textContent = "INVALID CALCULATION" ; 
        console.error(error)
    }
}



function clear(){
    displayArea.textContent = "" ; 
}

function addToDisplayArea(value) {
    displayArea.textContent +=value ;
}

