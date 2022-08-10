const api_key = "9dfe7bf216af93a4088ef7ac";
const api_url ="https://v6.exchangerate-api.com/v6/" + api_key;

const currency_one= document.getElementById("currency-one");
const currency_two = document.getElementById("currency-two");
const list_one= document.getElementById("list_one");
const list_two= document.getElementById("list_two");
const amount = document.getElementById("amount");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

    fetch(api_url + "/codes")
    .then(res=>res.json())
    .then(data=>{
        let options;
        const datalength= data.supported_codes.length
        for(let i=0;i<datalength;i++){
            options += `<option value=${data.supported_codes[i][0]}>${data.supported_codes[i][1]}</option>`
        }
        list_one.innerHTML = options;
        list_two.innerHTML=options;
        }).catch((err)=> console.log(err))


calculate.addEventListener("click", ()=>{
        const doviz1 = currency_one.value;
        const doviz2 = currency_two.value;
        const miktar = amount.value;

        fetch(api_url + "/latest/" +doviz1)
        .then((res)=>res.json())
        .then((data)=>{
          const sonuc = data.conversion_rates[doviz2]
           result.innerHTML=`
                    <div class="card border-primary">
                    <div class="card-body text-center" style="font-size: 25px;">
                   ${miktar} ${doviz1} = ${sonuc}
                    </div>`

        })
        .catch((err)=>console.log(err))
        
})