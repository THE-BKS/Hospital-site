import React from 'react';
import "./styles.css"

const testArray = [
    {
        heading: "Basic Health Check Up",
        description: "CBC, TFT, Diabetese screening, Urine R/M",
        price1: "36 Parameters (",
        crossed: "1099",
        price2: " - 799)",
        color: "#F8F0FF"
    },
    {
        heading: "Standard Health Check Up",
        description: "CBC, TFT, Diabetese screening, Liver function test, Kidney function test, Lipid profile, Urine R/M",
        price1: "5 Parameters (",
        crossed: "2200",
        price2: " - 1299)",
        color: "#EDF9F9"
    },
    {
        heading: "Advance Health Check Up",
        description: "CBC, TFT, Diabetese screening, Liver function test, Kidney function test, Lipid profile, Vitamin B12, Vitamin R/M",
        price1: "57 Parameters (",
        crossed: "3000",
        price2: " - 2199)",
        color: "#FFE6EF"
    },
    {
        heading: "Master Health Check Up",
        description: "CBC, TFT, Diabetese screening, Liver function test, Kidney function test, Lipid profile, Vitamin B12, Vitamin D, Electrolytes, Thyroid function test, Urine R/M",
        price1: "60 Parameters (",
        crossed: "3500",
        price2: " - 2399)",
        color: "#F8F0FF"
    },
    {
        heading: "Women Wellness",
        description: "Women wellness CBC with peripheral smear review, Throid funcion test, Diabetes screening, Iron profile, Urine R/M",
        price1: "39 Parameters (",
        crossed: "1500",
        price2: " - 1199)",
        color: "#EDF9F9"
    },
    {
        heading: "Fever Panel",
        description: "CBC, ESR, MP, Widal, Typhidot, SGOT, SGPT, Urine R/M",
        price1: "40 Parameters (",
        crossed: "1200",
        price2: " - 999)",
        color: "#FFE6EF"
    },
    {
        heading: "Diabetes Panel",
        description: "Random / Fasting blood sugar, HbA1C, Creatining, Urea, Lipid profile, Urine R/M",
        price1: "26 Parameters (",
        crossed: "1200",
        price2: " - 999)",
        color: "#F8F0FF"
    },
    {
        heading: "Headache Panel 1",
        description: "CBC, ESR, CRP",
        price1: "18 Parameters (",
        crossed: "800",
        price2: " - 400)",
        color: "#EDF9F9"
    },
    {
        heading: "Headache Panel 2",
        description: "CBC, ESR, CRP, Electrolyte",
        price1: "21 Parameters (",
        crossed: "1100",
        price2: " - 799)",
        color: "#FFF3EB"
    },
    {
        heading: "Anemia Panel",
        description: "CBC with peripheral smear review, Iron Profile, Vitamin B12",
        price1: "21 Parameters (",
        crossed: "2000",
        price2: " - 1499)",
        color: "#FFE6EF"
    },
    {
        heading: "Arthritis Panel 1",
        description: "CBC, ESR, calcium, Uric acid, RA factor, CRP",
        price1: "21 Parameters (",
        crossed: "1250",
        price2: " - 999)",
        color: "#FFF3EB"
    },
    {
        heading: "Arthritis Panel 2",
        description: "Basic + Vitamin D, ANCA",
        price1: "23 Parameters (",
        crossed: "4300",
        price2: " - 3500)",
        color: "#FFE6EF"
    }
]
function Cards() {
    return (
        <div className="cards-container">
            {testArray.map((obj)=>{
                return(
                    <div className="cards-div" style={{backgroundColor: obj.color}}>
                        <h5 className="cards-heading"><b>{obj.heading}</b></h5>
                        <p>{obj.description}</p>
                        <b>{obj.price1}<span className="cards-crossed-line"><b>{obj.crossed}</b></span>{obj.price2}</b>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards
