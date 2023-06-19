import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDollarSign, faFilm, faFloppyDisk, faImage, faPercent } from '@fortawesome/free-solid-svg-icons'
import PanelContainer from '../components/PanelContainer'
import PanelHeader from '../components/PanelHeader'
import CustomInput from '../components/CustomInput'
import DropDownSelect from '../components/DropDownSelect'
import CustomSelect from '../components/CustomSelect'
import  Badge  from '../components/Badge'
import AddMediaSpace from '../components/AddMediaSpace'
import Row from '../components/Row'
import SwitchButton from '../components/SwitchButton'
import CheckBoxGroup from '../components/CheckBoxGroup'

library.add(faFloppyDisk, faImage, faFilm, faDollarSign, faPercent)
const buttons1 = [
  {
    icon : "fa-solid fa-xmark",
    bgColor : "#FFFFFF",
    txtColor : "#667085",
    value : "cancel",
  },
  {
    icon : "fa-solid fa-floppy-disk",
    bgColor : "#5C59E8",
    txtColor : "",
    value : "Save",
  }
]

const dropDownOptions = [
  {
    value : "Apple",
  },
  {
    value : "Sumsung"
  },
  {
    value : "Watch"
  },
  {
    value : "Gadgets"
  },
  {
    value : "Phone"
  },
  {
    value : "Laptob"
  }
]

const locations = [
  {value : "Storage Area", name : "StorageArea"}, 
   {value : "Storage Zone", name : "StorageZone"},
  {value : "StorageLocation", name : "StorageLocation"}
  ]

const AddProductPage = () => {

  const [productInfo, setProductInfo] = useState({
                                                prName : "",
                                                description : "",
                                                price : "",
                                                dsType : "",
                                                dsPercent : "",
                                                taxClass : "",
                                                VATAmount : "",
                                                category : "",
                                                tag : [],
                                                status : "",
                                                location : {
                                                          status : false,
                                                          options :    {
                                                                StorageArea : false,
                                                                StorageZone : false,
                                                                StorageLocation : false
                                                              }
                                                            }
                                                })
  const [switchOn, setSwitchOn] = useState(false)


  const handleSwitchClick = ()=> {
       setSwitchOn(!switchOn)

   }


   const handleCheckBoxChange = (e)=> {
            
   }


  const handleChange = (e)=> {
    const updateProductInfo = {...productInfo}
    updateProductInfo[e.target.name] = e.target.value
    setProductInfo(updateProductInfo)
  }


  return (
    <div className='add-product-page'>
    {/* style={{border : "2px solid red", minWidth : "300px", width : "70%"}} */}
            <form className='add-prodact-form'>
              <PageHeader title={"Products"}  infoBtn={buttons1}/>
                 <div className='form-inputs'>
                  <div  className='section-form1'>
                      <PanelContainer>
                          <PanelHeader  title={"General Information"} />
                          <CustomInput 
                                  onChange={handleChange}
                                  value  = {productInfo.prName}
                                  element={"text-input"}
                                  id={"pr-name"} 
                                  name={"prName"} 
                                  type={"text"} 
                                  labelTxt={"Product Name"}
                                  placeholder={"Type product name here. . ."}
                                  />
                          <CustomInput 
                                  element={"text-area"}
                                  id={"pr-disc"} 
                                  name={"description"} 
                                  onChange={handleChange}
                                  value  = {productInfo.description}
                                  type={"text"} 
                                  labelTxt={"Description"}
                                  placeholder={"Type product description here. . ."}
                                  />
                      </PanelContainer>
                      <PanelContainer>
                          <PanelHeader  title={"Media"}/>
                          <AddMediaSpace title={"Photo"} 
                                          icon={"fa-image"} 
                                          btnValue={"Image"}
                                          multiple={true}
                                          />
                          
                          <AddMediaSpace title={"Video"} 
                                          icon={"fa-film"} 
                                          btnValue={"Video"}
                                          multiple={false}
                                          />
                      </PanelContainer>
                      <PanelContainer>
                          <PanelHeader  title={"Pricing"}/>
                          <CustomInput element={"text-input"} 
                                        type={"number"}
                                        onChange={handleChange}
                                        value  = {productInfo.price}
                                        placeholder={"Type base price here. . ."}
                                        id={"price"} 
                                        name={"price"}
                                        labelTxt={"Base Price"} 
                                        icon={"fa-dollar-sign"} />
                          <Row cls={"inputs-flex-group"}>
                            <div style={{minWidth : "300px"}}>
                              <CustomSelect 
                                    name={"dsType"}
                                    onChange={handleChange}
                                    value  = {productInfo.dsType}
                                    placeholder={"Select a discount type"}
                                    optionsTitle={"Discount Type"} 
                                    id={"discT"}
                                    values={["Type1", "Type2", "Type3"]} />
                            </div>
                            <div style={{minWidth : "300px"}}>
                              <CustomInput 
                                  id={"discP"}
                                  name={"dsPercent"}
                                  element={"text-input"}
                                  type={"number"}
                                  labelTxt={"Discount Precentage (%)"}
                                  icon={"fa-solid fa-percent"}
                                  placeholder={"Type discount precentage. . ."}
                              />
                            </div>
                          </Row>
                          <Row cls={"inputs-flex-group"}>
                            <div style={{minWidth : "300px"}}>
                              <CustomSelect 
                                    optionsTitle={"Tax Class"} 
                                    placeholder={"Select a tax class"}
                                    id={"tax-class"}
                                    name={"taxClass"}
                                    onChange={handleChange}
                                    value  = {productInfo.taxClass}
                                    values={["Tax1", "Tax2", "Tax3"]} />
                            </div>
                            <div style={{minWidth : "300px"}}>
                              <CustomInput 
                                  id={"Vat-Am"}
                                  name={"VATAmount"}
                                  element={"text-input"}
                                  type={"number"}
                                  labelTxt={"VAT Amount (%)"}
                                  onChange={handleChange}
                                  value  = {productInfo.VATAmount}
                                  icon={"fa-solid fa-percent"}
                                  placeholder={"Type VAT amount. . ."}
                              />
                            </div>
                          </Row>
                      </PanelContainer>
                  </div>
                  <div className='section-form2'>
                      <PanelContainer>
                          <PanelHeader  title={"Category"}/>
                          <CustomSelect 
                                  optionsTitle={"Product Category"} 
                                  placeholder={"Select Category"}
                                  id={"prdCat"} 
                                  name={"category"}
                                  onChange={handleChange}
                                  value  = {productInfo.category}
                                  values={["phone","laptob", "TV"]}/>
                          <DropDownSelect 
                                      id={'dr-tg'} 
                                      title={"Product Tag"}
                                      onChange={handleChange}
                                      name={"tag"}
                                      setProductInfo = {setProductInfo}
                                      productInfo = {productInfo}
                                      options={dropDownOptions}
                                      />
                      </PanelContainer>
                      <PanelContainer>
                          <PanelHeader  title={"status"}>
                            {productInfo.status && <Badge 
                                                      content={productInfo.status} 
                                                      nullValue={0} 
                                                      valueBg={productInfo.status === "Draft"? 0
                                                                : productInfo.status === "Published"? 1
                                                                : -1
                                                              } 
                                                      nullColor={"#667085"}/>}
                          </PanelHeader>
                          <CustomSelect 
                                optionsTitle={"Product Status"} 
                                placeholder={"Select Status"}
                                id={"prdSt"} 
                                name={"status"}
                                onChange={handleChange}
                                value  = {productInfo.status}
                                values={["Draft","Published", "Low Stock"]} />
                      </PanelContainer>
                      
                      <PanelContainer>
                          <PanelHeader  title={"Location"}/>
                            <SwitchButton
                                      onClick={handleSwitchClick}
                                      switchOn={switchOn}
                                     id={"swBtn"} />
                            {switchOn && <CheckBoxGroup 
                                                checkboxOptions={locations}
                                                />}
                      </PanelContainer>
                  </div>
                </div> 
            </form> 
        </div>
  )
}

export default AddProductPage
