describe('The calculate bill fuction' , function(){
    it('should be able to set the call cost' , function(){
        
let calculatebill = calculate();
        calculatebill.setCallCost(2.75);
        
    assert.equal(2.75,calculatebill.getCallCost());

    
    });
 
    it('should be able to set the call cost' , function(){
        
        let calculatebill2 = calculate();
        calculatebill2.setCallCost(1.75);
                
        assert.equal(1.75,calculatebill2.getCallCost());
        
            
   });

    it('should be able to set the sms cost' , function(){
        
    let calculatebill = calculate();
    calculatebill.setSmsCost(0.75);
                        
    assert.equal(0.75,calculatebill.getSmsCost());
                
                    
    }); 
        it('should be able to set the sms cost' , function(){
        
        let calculatebill2 = calculate();
        calculatebill2.setSmsCost(3.00);
                                
        assert.equal(3.00,calculatebill2.getSmsCost());
                        
                            
    }); 
});
