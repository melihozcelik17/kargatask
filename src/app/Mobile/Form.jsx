"use client"
import React, { useState, useEffect } from 'react';
import axios from "axios"




export default function Form() {
    const [form, setForm] = useState({
        facility: "",
        year: "",
        source_id: "",
        fuel_type_id: "",
        fuel_id: "",
        amount: "",
        unit_id: ""



    })

    const [resultData, setResultData] = useState({
        co2: 0,
        ch4: 0,
        no2: 0,
        co2e: 0
    });
    const [savedData, setSavedData] = useState([]);

    // useEffect(() => {
    //     // fetch("http://3.86.79.133/dijital-mentorluk-backend-test/public/test-data",)
    //     // API'den select seçeneklerini almak için bir istek yapabilirsiniz.
    //     // Örnek olarak, facility ve year seçeneklerini almak için:
    //     axios
    //         .get(`API_URL/facilities`)
    //         .then(response => setFacilities(response.data));

    //     axios
    //         .get(`API_URL/years`)
    //         .then(response => setYears(response.data));
    // }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

    }

    console.log("form", form);

    // const handleSave = async () => {
    //     // Verileri API'ye göndermek için axios veya fetch kullanabilirsiniz.
    //     try {
    //         const response = await axios.get(`http://3.86.79.133/dijital-mentorluk-backend-test/public/test-data-calculate?${queryString}`);
    //         const resultData = response.data; // API'den gelen veri

    //         // Veriyi işleyin ve tabloya eklemek için uygun kodu buraya ekleyin
    //         // Örnek olarak, bir state içinde sonuçları saklayabilirsiniz.
    //     } catch (error) {
    //         console.error("Veri alınamadı: " + error.message);
    //     }
    // };


    const handleReset = () => {
        setForm({
            facility: "",
            year: "",
            source_id: "",
            fuel_type_id: "",
            fuel_id: "",
            amount: "",
            unit_id: ""
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        let queryArray = [];
        for (const key in form) {
            if (!form[key]) {
                return false;
            }
            queryArray.push(`${key}=${encodeURIComponent(form[key])}`);
        }
        const queryString = queryArray.join("&");

        const response = await axios.get(`http://3.86.79.133/dijital-mentorluk-backend-test/public/test-data-calculate?${queryString}`).then((response) => {
            console.log("response", response)
            const data = response.data;
            setResultData(data);
        }).catch((err) => {
            console.error(err)
        })

    };


    const handleSave = () => {
        if (resultData) {
            setSavedData([...savedData, {
                facility: form.facility,
                year: form.year,
                fuel_type_id: form.fuel_type_id,
                fuel_id: form.fuel_id,
                amount: form.amount,
                unit_id: form.unit_id,
                CO2: resultData.co2,
                CH4: resultData.ch4,
                N2O: resultData.no2,
                CO2E: resultData.co2e,
            }]);
        }
        // ...Object.values(resultData)
    };
    const handleEdit = (index) => {

        if (savedData[index]) {
            setForm({ ...savedData[index] });
        }
    };

    const handleDelete = (index) => {

        const updatedData = [...savedData];
        updatedData.splice(index, 1);
        setSavedData(updatedData);
    };
    return (
        <main className="  ">
            <div className=' '>

                <h1>GİRDİ ALANI  </h1>
                <p>Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları doldurun:</p>
                <div>

                    <form className='flex g-4 flex-col w-1/2 justify-between  m-1.5 tracking-wider p-2.5  border-2 shadow overflow-hidden  divide-gray-200 ' onSubmit={(e) => handleSubmit(e)}>
                        <label for="underline_select" className="sr-only">Underline select</label>
                        <select name="facility" onClick={handleChange} id="underline_select" className=" text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-nonefocus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Facility </option>
                            <option value="Base factory">Base factory</option>
                            <option value="Sub factory">Sub factory</option>
                            <option value="Production factory">Production factory</option>

                        </select>
                        <label for="underline_select" className="sr-only">Underline select</label>
                        <select name="year" onClick={handleChange} id="underline_select" className=" text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-nonefocus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Year</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                        </select>
                        <label for="underline_select" className="sr-only">Underline select</label>
                        <select name="source_id" onClick={handleChange} id="underline_select" className=" text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-nonefocus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Fuel Source</option>
                            <option value="Yakıtlar">Yakıtlar</option>
                            <option value="Biyoenerji">Biyoenerji</option>

                        </select>
                        <label for="underline_select" className="sr-only">Underline select</label>
                        <select name="fuel_type_id" onClick={handleChange} id="underline_select" className=" text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-nonefocus:outline-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Fuel Type</option>
                            <option value="Gaz yakıtlar">Gaz yakıtlar</option>
                            <option value="Sıvı yakıtlar">Sıvı yakıtlar</option>
                            <option value="Katı yakıtlar">Katı yakıtlar</option>
                            <option value="Biyoyakıt">Biyoyakıt</option>
                            <option value="Biyokütle">Biyokütle</option>
                            <option value="Biyogaz">Biyogaz</option>
                        </select>
                        <label for="underline_select" className="sr-only">Underline select</label>
                        <select name="fuel_id" onClick={handleChange} id="underline_select" className=" text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-nonefocus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Fuel</option>
                            <option value="Bütan">Bütan</option>
                            CNG                            <option value="CNG">CNG</option>
                            <option value="LNG">LNG</option>
                        </select>
                        <label for="underline_select" className="sr-only">Underline select</label>
                        <select name="amount" onClick={handleChange} id="underline_select" className=" text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-nonefocus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected>Amount of Activity </option>
                            <option value="1000000">1000000</option>
                            <option value="2000000">2000000</option>
                            <option value="3000000">3000000</option>
                            <option value="4000000">4000000</option>
                        </select>
                        <select name="unit_id" onClick={handleChange} id="underline_select" className=" text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-nonefocus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option selected> Unit </option>
                            <option value="ton">ton</option>
                            <option value="litre">litre</option>
                            <option value="kWh (Net CV)">kWh (Net CV)</option>
                            <option value="kWh (Gross CV)">kWh (Gross CV)</option>
                        </select>

                    </form>
                    <div className=' flex flex-col w-1/2 '>
                        {resultData ? (
                            Object.values(resultData).map((item, index) => {
                                console.log("item", item);
                                return (

                                    <h1 key={index} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.5 " > {item || 0}</h1>
                                )
                            })
                        ) : (
                            <></>)}
                    </div>
                    <button type="submit" className="bg-[#0D1840] rounded-2xl p-2 border text-white text-center hover:text-blue-700">Hesapla</button>
                </div>
            </div>

            <div className=' '>



                <h1>SONUÇ ALANI  </h1>
                <p>Girdi Alanı'nda girdiğiniz değerlere göre salınan gaz miktarları aşağıdaki gibidir:</p>
                <div className=' p-2'>

                    <a className=" bg-[#0D1840] rounded-2xl   p-2 border text-white text-center hover:text-blue-700" href="#" onClick={handleReset}>Sıfırla</a>
                    <a className=" bg-[#0D1840] rounded-2xl  p-2 border text-white text-center hover:text-blue-700" href="#" onClick={handleSave}>Kaydet</a>
                </div>

                <div className=''>
                </div>
                hesaplamalar
            </div>
            <div className="">
                <div className="m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg shadow overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-[#0D1840]">
                                    <tr className=' '>
                                        <th scope="col" className=" text-gray-500 uppercase">Facilty ID</th>
                                        <th scope="col" className=" text-gray-500 uppercase">Year</th>
                                        <th scope="col" className=" text-gray-500 uppercase">Fuel Type</th>
                                        <th scope="col" className=" text-gray-500 uppercase">Fuel</th>
                                        <th scope="col" className=" text-gray-500 uppercase">Amount of Fuel</th>
                                        <th scope="col" className=" text-gray-500 uppercase">Units</th>
                                        <th scope="col" className=" text-gray-500 uppercase">CO2</th>
                                        <th scope="col" className=" text-gray-500 uppercase">CH4</th>
                                        <th scope="col" className=" text-gray-500 uppercase">N2O</th>
                                        <th scope="col" className=" text-gray-500 uppercase">CO2E</th>
                                        <th scope="col" className=" text-gray-500 uppercase"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 ">
                                    {savedData.map((item, index) => (
                                        <tr key={index} className='mb-4 '>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800 dark:text-gray-200">{item.facility}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{item.year}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{item.fuel_type_id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{item.fuel_id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{item.amount}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{item.unit_id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{item.CO2}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{item.CH4}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm ">{item.N2O}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm ">{item.CO2E}</td>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm ">


                                                <a className="block bg-[#0D1840] rounded-2xl  p-2 border text-white text-center hover:text-blue-700" onClick={() => handleDelete(index)}>Sil</a><br />
                                                <a className="block bg-[#0D1840] rounded-2xl  p-2 border text-white text-center hover:text-blue-700" onClick={() => handleEdit(index)} >Düzenle</a>

                                            </td>
                                        </tr>



                                    ))}



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </main >
    )
}
