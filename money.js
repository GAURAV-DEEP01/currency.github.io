
convertFrom = document.querySelector(".from-curr");
convertTo = document.querySelector(".to-curr");
 selectTag = document.querySelectorAll("select");
 exchangeIcon = document.querySelector(".exchange");
currConvertBtn = document.querySelector("button");


selectTag.forEach((ele , id) => { 

    for (const currency_code in currency_list)
    {
        let selected;
        if (id == 0 && currency_code =="INR")
        { 
            selected = "selected";
        }
        else if (id == 1 && currency_code == "USD")
        {
            selected = "selected";
        } 
        
        let option = `<option value="${currency_code} "${selected}>${currency_list[currency_code]}</option>`;
        ele.insertAdjacentHTML("beforeend", option);
    }
    
});

exchangeIcon.addEventListener("click",()=>{
    let fromvalue = selectTag[0].value
    let tovalue = selectTag[1].value
 selectTag[0].value= tovalue
 selectTag[1].value=fromvalue 

    
});

currConvertBtn.addEventListener("click", ()=>{
    let currtext = this.convertFrom.value;
    let currencyFrom = this.selectTag[0].value.trim();
    let currencyto = this.selectTag[1].value.trim();

    console.log(currtext)
var myHeaders = new Headers();
myHeaders.append("apikey", "z0DiTFta5WPtfpru4qh5oo9EMKS3Vt1X");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyto}&from=${currencyFrom}&amount=${currtext}`, requestOptions)
  .then(response => response.json())

  .then((data) => {console.log(data)
    convertTo.value= data.result  
})
  .catch(error => console.log('error', error));
  
  
}); 