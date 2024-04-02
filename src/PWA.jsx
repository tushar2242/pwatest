import { FrappeApp } from 'frappe-js-sdk';
import { useState } from 'react'
//Add your Frappe backend's URL
const PWA = () => {

    function getToken() {
        return "0ea4f0ee1c773b5:9d9f23fb7ca1bf0"
    }

    const frappe = new FrappeApp('https://luckybee.tranqwality.com/', {
        useToken: true,
        // Pass a custom function that returns the token as a string - this could be fetched from LocalStorage or auth providers like Firebase, Auth0 etc.
        token: getToken,
        // This can be "Bearer" or "token"
        type: "token"
    });
    // console.log(getToken())
    const auth = frappe.auth();
    const db = frappe.db();
    // auth
    //     .loginWithUsernamePassword({ username: 'Administrator', password: 'admin' })
    //     .then((response) => console.log('Logged in'))
    //     .catch((error) => console.error(error));



    // const auth = frappe.auth()
    // const db = frappe.db();
    // db.getDoc('Item', 'L11244')
    //     .then((doc) => console.log(doc))
    //     .catch((error) => console.error(error));

    const submitForm = (e) => {
        e.preventDefault();
        // Your form submission logic here        
        db.getDoc('Purchase Invoice', "SRPINV202400026")
            .then((doc) => console.log(doc))
            .catch((error) => console.error(error));
    };

    const toggleAdditionalField = () => {
        // Your toggle logic here
    };

    const previous = () => {
        // Your logic for previous button
    };

    const next = () => {
        // Your logic for next button
    };

    const saveData = () => {
        // Your logic for saving data button
    };

    const printBarcode = () => {
        // Your logic for printing barcode button
    };

    return (
        <>
            <form onSubmit={submitForm}>
                <div className="search-container">
                    <input type="search" id="search" name="search" placeholder="Search..." />
                    <button type="submit">Search</button>
                    {/* Moved Sub-Category input field inside the search container */}
                </div>
            </form>
            <form>
                <div className="search-container">
                    <label htmlFor="itemName">ASIN Number:</label>
                    <input type="text" id="custom_asin" name="custom_asin" placeholder="ASIN Number" />
                    <br />
                    <label htmlFor="asinSelect">ASIN Number:</label>
                    <select id="asinSelect" name="productType">
                        <option></option>
                        <option value="ASIN">ASIN</option>
                        <option value="Non-ASIN">Non-ASIN</option>
                    </select>
                    {/* Hidden divs */}
                    <div id="boxNumberField" style={{ display: 'none' }}>
                        <label htmlFor="asinReason">Box Number:</label>
                        <input type="text" id="custom_box_number" name="custom_box_number" />
                    </div>
                    <div id="imageUploadField" style={{ display: 'none' }}>
                        <label htmlFor="imageUpload">Image:</label>
                        <img id="image" src="" alt="API Image" />
                    </div>
                    <br />
                    <label> ItemName :</label>
                    <input type="text" id="item_name" name="itemName" placeholder="ItemName" />
                    <label>Description :</label>
                    <input type="text" id="description" name="description" placeholder="Description" />
                    <label>Brand :</label>
                    <input type="text" id="brand" name="brand" placeholder="Brand" />
                    <label>Sub-Category</label>
                    <input type="text" id="subcategory" name="subcategory" />
                    <div className="container">
                        <div className="field">
                            <label>EAN</label>
                            <input type="number" id="ean" name="ean" />
                        </div>
                        <div className="field">
                            <label>MRP:</label>
                            <input type="number" id="rate" name="rate" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="field">
                            <label htmlFor="field1">Purchased Qty:</label>
                            <input type="number" id="qty" name="accepted_qty" />
                        </div>
                        <div className="field">
                            <label htmlFor="field2">Received Qty :</label>
                            <input type="number" id="received_qty" name="received_qty" />
                        </div>
                    </div>
                    <label htmlFor="qc">QC Pass:</label>
                    <select id="qc" name="qc" required onChange={toggleAdditionalField}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <br />
                    <br />
                    <div id="additionalField" style={{ display: 'none' }}>
                        <label htmlFor="additionalInfo">Resion:</label>
                        <input type="text" id="additionalInfo" name="additionalInfo" />
                        <br />
                    </div>
                    <br />
                </div>
                <div className="search-container">
                    <button type="button" onClick={previous}>Previous</button>
                    <button type="button" onClick={next}>Next</button>
                    <button type="button" onClick={saveData}>Save Data</button>
                    <button type="button" onClick={printBarcode}>Print barcode</button>
                </div>
            </form>
        </>
    );

}

export default PWA;