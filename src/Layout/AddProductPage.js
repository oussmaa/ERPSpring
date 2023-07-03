import React, {  useEffect, useState } from 'react'
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
import axios from 'axios'
import RequestMessage from '../components/RequestMessage'

library.add(faFloppyDisk, faImage, faFilm, faDollarSign, faPercent)

const productInputValues = {
                              prName : "",
                              description : "",
                              price : "",
                              quanatity : "",
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
                                              StorageArea : "",
                                              StorageZone : "",
                                              StorageLocation : ""
                                            }
                                          }
                              }



const buttons1 = [
  {
    icon : "fa-solid fa-xmark",
    bgColor : "#FFFFFF",
    txtColor : "#667085",
    value : "cancel",
    type : 'link',
    link : '/products',
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

// const locations = [
//   {value : "Storage Area", name : "StorageArea"}, 
//    {value : "Storage Zone", name : "StorageZone"},
//   {value : "StorageLocation", name : "StorageLocation"}
//   ]







const AddProductPage = () => {

  const [productInfo, setProductInfo] = useState({...productInputValues})
  const [locationSelectOptions, setLocationSelectOptions] = useState({
                                                                    storageLocation : [],
                                                                    storageZone : [],
                                                                    storageArea : []
                                                                      })
  const [successReq, setSuccessReq] = useState({
                                                  reqState : "",
                                                  resMessage : ""
                                                })
  


  useEffect(()=> {
    axios.get("http://localhost:5050/LoactionController")
    .then((result)=> {
      console.log(result.data)
      const allLoctions = [...result.data]
      const stLocation = []
      const stZone= []
      const stArea= []
      console.log(allLoctions)
      allLoctions.map((loc)=> {
        stLocation.push(loc.storageLocation)
        stZone.push(loc.storageZone)
        stArea.push(loc.storageArea)
      })
      setLocationSelectOptions({
                                storageLocation : [...stLocation],
                                storageZone : [...stZone],
                                storageArea : [...stArea]
                              })
    })
  }, [])


  const handleSwitchClick = ()=> {
      const switchBtn = productInfo.location.status
       const updateProductInfo = {...productInfo, location : {...productInfo.location, status : !switchBtn}}
       setProductInfo(updateProductInfo)  
   }


  const handleChange = (e)=> {
    const updateProductInfo = {...productInfo}
    updateProductInfo[e.target.name] = e.target.value
    setProductInfo(updateProductInfo)
  }

  const handleLocationChange = (e)=> {
    const updateLocation = {...productInfo.location.options}
    updateLocation[e.target.name] = e.target.value
    setProductInfo({...productInfo, location : {...productInfo.location, options : {...updateLocation}}})
  }


  const handleSubmit = (e)=> {
    e.preventDefault()
    const product = {
      nameProduit : productInfo.prName,
      description : productInfo.description,
      price : productInfo.price,
      // dscType : productInfo.dsType,
      // dscPercent : productInfo.dsPercent,
      // taxClass :productInfo.taxClass,
      // VATAmount:productInfo.VATAmount,
      categorie : productInfo.category,
      // tag :productInfo.tag,
      quanatity : productInfo.quanatity,
      // status : productInfo.status,
      location_id : productInfo.location.options.StorageLocation
    }
    axios.post("http://localhost:5050/ProduitController", product)
    .then((response)=>{
        setSuccessReq({success : "success", resMessage : "Your product saved successfully."}) //add success informations
        setTimeout(()=> {
          setSuccessReq({success : "", resMessage : ""}) //reset fetching information
        }, 5000)
    })
    .then(()=> {
        setProductInfo(productInputValues) //reset all inputs
    })
    .catch((err)=>{
      setSuccessReq({success : "failed", resMessage : err.message})//add failed informations
      setTimeout(()=> {
        setSuccessReq({success : "", resMessage : ""}) //reset fetching information
      }, 5000)
      console.log("hedha error mta36 el catch")
      console.log(err)
    })
  }

  return (
    <div className='add-product-page main-page'>
        <RequestMessage message={successReq.resMessage} success={successReq.success === "success"? "success"
                                                              : successReq.success === "failed"? "failed"
                                                              : ""} />
    {/* style={{border : "2px solid red", minWidth : "300px", width : "70%"}} */}
            <form className='add-prodact-form' onSubmit={(e)=>handleSubmit(e)}>
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
                                        min = {0}
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
                                    optionsTitle={"Discount Type"} 
                                    placeholder={"Select a discount type"}
                                    id={"discT"}
                                    name={"dsType"}
                                    onChange={handleChange}
                                    value  = {productInfo.dsType}
                                    values={["Type1", "Type2", "Type3"]} />
                            </div>
                            <div style={{minWidth : "300px"}}>
                              <CustomInput 
                                  id={"discP"}
                                  name={"dsPercent"}
                                  element={"text-input"}
                                  type={"number"}
                                  min = {0}
                                  labelTxt={"Discount Precentage (%)"}
                                  onChange={handleChange}
                                  value={productInfo.dsPercent}
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
                                  min = {0}
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
                          <PanelHeader  title={"Stock"}>
                            {productInfo.status && <Badge 
                                                      content={productInfo.status} 
                                                      nullValue={0} 
                                                      valueBg={productInfo.status === "Draft"? 0
                                                                : productInfo.status === "Published"? 1
                                                                : -1
                                                              } 
                                                      nullColor={"#667085"}/>}
                          </PanelHeader>
                            <CustomInput 
                                id={"quanatity-id"}
                                name={"quanatity"}
                                element={"text-input"}
                                type={"number"}
                                min = {0}
                                labelTxt={"quantity"}
                                required={true}
                                onChange={handleChange}
                                value  = {productInfo.quanatity}
                                placeholder={"Type quantity. . ."}
                            />
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
                                      switchOn={productInfo.location.status}
                                     id={"swBtn"} />
                            <div style={{ opacity : productInfo.location.status? 1 : 0.5, 
                                          width : "100%",
                                          display : "flex",
                                          flexDirection : "column",
                                          gap : "16px" }}>
                            <CustomSelect 
                                    disabled = {!productInfo.location.status}
                                    optionsTitle={"Storage Location"} 
                                    placeholder={"Select a Storage Loaction"}
                                    id={"StorageLocation-id"}
                                    name={"StorageLocation"}
                                    onChange={handleLocationChange}
                                    value  = {productInfo.location.options.StorageLocation}
                                    values={locationSelectOptions.storageLocation} />
                            <CustomSelect 
                                    disabled = {!productInfo.location.status}
                                    optionsTitle={"Storage Zone"} 
                                    placeholder={"Select a Storage Area"}
                                    id={"StorageZone-id"}
                                    name={"StorageZone"}
                                    onChange={handleLocationChange}
                                    value  = {productInfo.location.options.StorageZone}
                                    values={locationSelectOptions.storageZone} />
                            <CustomSelect 
                                    disabled = {!productInfo.location.status}
                                    optionsTitle={"Storage Area"} 
                                    placeholder={"Select a Storage Area"}
                                    id={"StorageArea-id"}
                                    name={"StorageArea"}
                                    onChange={handleLocationChange}
                                    value  = {productInfo.location.options.StorageArea}
                                    values={locationSelectOptions.storageArea} />
                            </div>
                      </PanelContainer>
                  </div>
                </div> 
            </form> 
        </div>
  )
}

export default AddProductPage
