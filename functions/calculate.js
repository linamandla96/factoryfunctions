function calculate(){
var theCall = 0;
var theSms
function setCallCost(call){
theCall = call;
}
function getCallCost(){

    return theCall;
}

function setCallCost(call){
    theCall = call;
    }
    function getCallCost(){
    
        return theCall;
    }

function setSmsCost(sms){
    theSms = sms;
    }
    function getSmsCost(){
    
        return theSms;
    }

    function setSmsCost(sms){
        theSms = sms;
        }
        function getSmsCost(){
        
            return theSms;
        }
 return{
    setCallCost,
    getCallCost,
    
    setSmsCost,
    getSmsCost,
}

}