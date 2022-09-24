import React from "react";
import './Card.css';
import { FaRegCreditCard, FaTable, FaAppStore, FaMegaport,FaBuilding, FaFileUpload, FaEye,FaLink, FaBuffer, FaReact, FaGripLinesVertical} from "react-icons/fa";



export default function Cards() {
    return (
        
        <div className="allcards">
             
            <div className="firstcard">
                <div className="heading">
                    <h3>AI FOR ALL </h3>
                    
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                           
                            <h4><span className="iconica"><FaBuilding/></span>Blinx_Tenant 
                         
                              <span className="chain"><FaEye/></span>
                              
                              <span className="chain"><FaLink/></span>
                              
                              <span className="chain"> <FaBuffer/></span>
                             
                              <span className="chain"><FaReact/></span></h4>
                       

                           <div  className="file"><FaFileUpload/></div>

                           <h6 className="drag">Drag and Drop your files</h6>
                            <form className="form">
                            <span>------OR------</span><br/>
                            <button className="button">Choose File</button>
                           
                            </form>
                        
                    </div>
                    
                </div>

            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                           
                            <h4><span className="iconica"><FaBuilding/></span>Blinx_Tenant 
                            <span className="chain"><FaEye/></span>
                              
                              <span className="chain"><FaLink/></span>
                              
                              <span className="chain"> <FaBuffer/></span>
                             
                              <span className="chain"><FaReact/></span>
                            </h4>

                           <h6><span  className="iconica"><FaRegCreditCard/></span> Credit_Card_Fraud_Detection.Csv</h6>

                            <p><span  className="iconica"><FaTable/></span>Tables : 1</p>
                            <p><span  className="iconica"><FaAppStore/></span>Application : 1</p>
                            <p><span  className="iconica"><FaMegaport/></span>Model Type : ML</p>
                        
                    </div>
                    
                </div>

            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                           
                            <h4><span className="iconica"><FaBuilding/></span>Blinx_Tenant
                            <span className="chain"><FaEye/></span>
                              
                              <span className="chain"><FaLink/></span>
                              
                              <span className="chain"> <FaBuffer/></span>
                             
                              <span className="chain"><FaReact/></span>
                            </h4>

                           <h6><span  className="iconica"><FaRegCreditCard/></span> Credit_Card_Transaction_Fraud_Detection</h6>

                            <p><span  className="iconica"><FaTable/></span>Tables : 1</p>
                            <p><span  className="iconica"><FaAppStore/></span>Application : 1</p>
                            <p><span  className="iconica"><FaMegaport/></span>Model Type : ML</p>
                        
                    </div>
                    
                </div>

            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                           
                            <h4><span className="iconica"><FaBuilding/></span>Blinx_Tenant 
                            <span className="chain"><FaEye/></span>
                              
                              <span className="chain"><FaLink/></span>
                              
                              <span className="chain"> <FaBuffer/></span>
                             
                              <span className="chain"><FaReact/></span>
                            </h4>

                           <h6><span  className="iconica"><FaRegCreditCard/></span> Creditcard.Csv</h6>

                            <p><span  className="iconica"><FaTable/></span>Tables : 1</p>
                            <p><span  className="iconica"><FaAppStore/></span>Application : 0</p>
                            <p><span  className="iconica"><FaMegaport/></span>Model Type : ML</p>
                        
                    </div>
                    
                </div>

            </div>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                           
                            <h4><span className="iconica"><FaBuilding/></span>Blinx_Tenant 
                            <span className="chain"><FaEye/></span>
                              
                              <span className="chain"><FaLink/></span>
                              
                              <span className="chain"> <FaBuffer/></span>
                             
                              <span className="chain"><FaReact/></span>
                            </h4>

                           <h6><span  className="iconica"><FaRegCreditCard/></span> Insurance Recommendation.Csv</h6>

                            <p><span  className="iconica"><FaTable/></span>Tables : 1</p>
                            <p><span  className="iconica"><FaAppStore/></span>Application : 0</p>
                            <p><span  className="iconica"><FaMegaport/></span>Model Type : ML</p>
                        
                    </div>
                    
                </div>

            </div>
             <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                           
                            <h4><span className="iconica"><FaBuilding/></span>Blinx_Tenant
                            <span className="chain"><FaEye/></span>
                              
                              <span className="chain"><FaLink/></span>
                              
                              <span className="chain"> <FaBuffer/></span>
                             
                              <span className="chain"><FaReact/></span>
                            </h4>

                           <h6><span  className="iconica"><FaRegCreditCard/></span> Co2 Emmission By Vehicles.Csv</h6>

                            <p><span  className="iconica"><FaTable/></span>Tables : 1</p>
                            <p><span  className="iconica"><FaAppStore/></span>Application : 1</p>
                            <p><span  className="iconica"><FaMegaport/></span>Model Type : ML</p>
                        
                    </div>
                    
                </div>

            </div>



        </div>

    )
}