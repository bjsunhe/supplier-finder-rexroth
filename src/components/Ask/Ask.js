import React, { useEffect, useState } from 'react';
import './Ask.css';
import List from  '../List/List'

const Ask = () => {
  const [inputValue, setInputValue] = useState('');
  const [questionList, setQuestionList] = useState([]);



  function containsHttp(url) {
      const httpRegex = /http(s)?:\/\//;
      return httpRegex.test(url);
  }
  async function processCount(sql,previousQuestions) {
    // const materials=await fetch('http://localhost:8090/api/material-delivery/find-material-by-materialid',{
      console.log(previousQuestions)

    const process = await fetch(
      "http://34.125.249.167:8888/api/ai/rexroth-vario-flow-category-api",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sql,
          previousQuestions
        }),
      }
    );

    return process.json();
  }


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Input Value: ${inputValue}`);


    processCount(inputValue.toString(),questionList.map(q=>q.question)).then((data) => {
      console.log(data);
      
      

      
  
      setQuestionList([
        { question: inputValue.toString(), answer: JSON.stringify(data.result) },
        ...questionList
        
      ]);
  
      if(containsHttp(data.result[0][Object.keys(data.result[0])[0]])){
        window.open(data.result[0][Object.keys(data.result[0])[0]], '_blank', 'noopener,noreferrer');
      }
    });
    // processCount(inputValue.toString(),questionList.map(q=>q.question)).then((data) => {
    //   console.log(data);
      
    //   let comments=data.comments.reduce((acc,curr)=>{
    //     acc[curr['COLUMN_NAME']]=curr['COLUMN_COMMENT']
    //     return acc
    //   },{})

    //   let answerList=data.result.map(item=>{
    //     return Object.keys(item).reduce((acc,curr)=>{
    //       acc[comments[curr]]=item[curr]
    //       return acc
    //     },{})
    //   })
  
    //   setQuestionList([
    //     { question: inputValue.toString(), answer: JSON.stringify(answerList) },
    //     ...questionList
        
    //   ]);
  
    //   if(containsHttp(data.result[0][Object.keys(data.result[0])[0]])){
    //     window.open(data.result[0][Object.keys(data.result[0])[0]], '_blank', 'noopener,noreferrer');
    //   }
    // });


  };


// useEffect(()=>{
//   let data={
//     "success": "success",
//     "sql": "show me an example",
//     "result": [
//         {
//             "nominalSize_mm_": "15",
//             "format": "SNH - slimline, normal, high",
//             "typeOfConstruction": "Ball runner block High Precision",
//             "ballChain": "Without ball chain (standard)",
//             "material_profiledRailSystems_": "Carbon steel",
//             "preloadClass": "C0 - Without preload (clearance)",
//             "accuracyClass": "H - Highly accurate",
//             "seal": "SS - Standard seal",
//             "self_aligningForCompensationOfMisalignments": "Without self-alignment",
//             "widthOfRunnerBlock_mm_": "34",
//             "lengthOfRunnerBlock_mm_": "58.2",
//             "heightOfRunnerBlock_mm_": "23.9",
//             "heightOfRunnerBlockWithGuideRail_mm_": "28",
//             "lubrication": "With initial lubrication and preservation",
//             "dynamicLoadCapacityC_n_": "9860",
//             "footnoteDynamicLoadCapacityC": "Determination of the dynamic load capacities and load moments is based on a 100 000 m travel as per DIN ISO 14728-1. Often only 50 000 m are actually stipulated. For comparison: Multiply values C, Mt and ML from the table by 1.26.",
//             "staticLongitudinalMomentLoadCapacityMl0_nm_": "87",
//             "staticTorsionalMomentLoadCapacityMt0_nm_": "120",
//             "max_AccelerationAmax_m_s__": "500",
//             "note_Max_AccelerationAmax": "If Fcomb◡> 2.8 • Fpr : amax = 50 m/s2",
//             "maximumPermissibleLinearSpeedVmax_m_s_": "5",
//             "dynamicTorsionalMomentLoadCapacityMt_nm_": "95",
//             "dynamicTorsionalMomentLoadCapacityMtFootnote": "Determination of the dynamic load capacities and load moments is based on a 100 000 m travel as per DIN ISO 14728-1. Often only 50 000 m are actually stipulated. For comparison: Multiply values C, Mt and ML from the table by 1.26.",
//             "dynamicLongitudinalMomentLoadCapacityMl_nm_": "68",
//             "dynamicLongitudinalMomentLoadCapacityMlFootnote": "Determination of the dynamic load capacities and load moments is based on a 100 000 m travel as per DIN ISO 14728-1. Often only 50 000 m are actually stipulated. For comparison: Multiply values C, Mt and ML from the table by 1.26.",
//             "staticLoadRatingC0_n_": "12700",
//             "permissibleAmbientTemperature": "-10 °C ... +80 °C",
//             "footnotePermissibleAmbientTemperature_min___Max_": "100 °C admissible for short time. For operation at negative temperatures, please consult us.",
//             "frictionCoefficient_": "0,002 ... 0,003",
//             "footnoteFrictionCoefficient_": "Without friction of seal",
//             "pitchTGuideRail_mm_": "60",
//             "version": "Ball rail system",
//             "weight_kg_": "0.2",
//             "dimensionA_profiledRailSystems__mm_": "34",
//             "dimensionA1_profiledRailSystems__mm_": "17",
//             "dimensionA2_profiledRailSystems__mm_": "15",
//             "dimensionA3_profiledRailSystems__mm_": "9.5",
//             "dimensionB_profiledRailSystems__mm_": "58.2",
//             "dimensionBTolerance_profiledRailSystems__mm_": "+0.5",
//             "dimensionB1_mm_": "39.2",
//             "dimensionE1_profiledRailSystems__mm_": "26",
//             "dimensionE2_profiledRailSystems__mm_": "26",
//             "dimensionE8_profiledRailSystems__mm_": "24.55",
//             "dimensionE9_profiledRailSystems__mm_": "10.7",
//             "dimensionH_profiledRailSystem__mm_": "28",
//             "dimensionH1_profiledRailSystems__mm_": "23.9",
//             "dimensionH2WithCoverStrip_profiledRailSystems__mm_": "16.3",
//             "dimensionH2WithoutCoverStrip_profiledRailSystems__mm_": "16.2",
//             "dimensionK1_profiledRailSystems__mm_": "10",
//             "dimensionK2_profiledRailSystems__mm_": "11.6",
//             "dimensionK3_profiledRailSystems__mm_": "7.2",
//             "dimensionK4_profiledRailSystems__mm_": "7.2",
//             "dimensionN3_profiledRailSystems__mm_": "6",
//             "dimensionN6_profiledRailSystems__mm_": "10.3",
//             "dimensionN6Tolerance_profiledRailSystems__mm_": "±0.5",
//             "dimensionS2_profiledRailSystems_": "M4",
//             "dimensionS5_profiledRailSystem__mm_": "4.5",
//             "dimensionS9ThreadDiameterXLead_profiledRailSystems__mm_": "M2,5x3,5",
//             "dimensionT1Min_profiledRailSystems__mm_": "12",
//             "dimensionV1_mm_": "5",
//             "dataSheet": "https://boschrexroth.com/media/ec1fd87f-8f69-4a5e-9596-e3f0089bc0f9",
//             "operatingInstructions": "https://boschrexroth.com/media/16a4480b-5e5b-462d-b8c6-63fc8d6fd756",
//             "_2dCad_0": "https://www.boschrexroth.com/media/6c99fe95-db97-434e-a4f3-b18c44f8d0be",
//             "_2dCad_1": "https://www.boschrexroth.com/media/7749b0a3-c6df-4092-91c1-ac2aff9bbf90",
//             "_3dCad_2": "https://www.boschrexroth.com/media/8b340547-b9e8-4264-a645-9a3cdcb7ffa0",
//             "_3dCad_3": "https://www.boschrexroth.com/media/2750d7a1-e237-40fc-a0a4-124cf948a7a7",
//             "productlink": "https://store.boschrexroth.com/Linear-motion-technology/Linear-guides/Ball-rail-systems-High-Precision/High-precision-ball-runner-blocks-BSHP/BALL-RUNNER-BLOCK-CARBON-STEEL_R162119320?cclcl=en_US",
//             "sealFootnote": "",
//             "_3dCad_1": "",
//             "_2dCad_3": "",
//             "_3dCad_0": "",
//             "_2dCad_2": "",
//             "dimensionE3_profiledRailSystems__mm_": "",
//             "dimensionE8_1_profiledRailSystems__mm_": "",
//             "dimensionE9_1_profiledRailSystems__mm_": "",
//             "maximumDynamicLoadFmax_n_": "",
//             "maximumPermissibleTorsionalMomentMtMax_nm_": "",
//             "maximumPermissibleLongitudinalLoadMomentMlMax_nm_": "",
//             "dimensionN1_profiledRailSystems__mm_": "",
//             "dimensionN2_profiledRailSystems__mm_": "",
//             "dimensionN4_profiledRailSystems__mm_": "",
//             "dimensionS1_profiledRailSystems__mm_": "",
//             "dimensionS11_profiledRailSystems__mm_": "",
//             "massM_g_": "",
//             "_3dCad_4": "",
//             "sizeFootnote": "",
//             "dimensionH2_profiledRailSystems__mm_": "",
//             "dimensionS9ThreadDiameterXLeadWithTolerance_profiledRailSystems": "",
//             "_2dCad_dwg__2": "",
//             "_2dCad_dxf__3": "",
//             "heightOfGuideRailH2WithCoverStrip_mm_": ""
//         }
//     ],
//     "comments": [
//         {
//             "COLUMN_NAME": "nominalSize_mm_",
//             "COLUMN_COMMENT": "Nominal size [mm]"
//         },
//         {
//             "COLUMN_NAME": "format",
//             "COLUMN_COMMENT": "Format"
//         },
//         {
//             "COLUMN_NAME": "typeOfConstruction",
//             "COLUMN_COMMENT": "Type of construction"
//         },
//         {
//             "COLUMN_NAME": "ballChain",
//             "COLUMN_COMMENT": "Ball chain"
//         },
//         {
//             "COLUMN_NAME": "material_profiledRailSystems_",
//             "COLUMN_COMMENT": "Material (profiled rail systems)"
//         },
//         {
//             "COLUMN_NAME": "preloadClass",
//             "COLUMN_COMMENT": "Preload class"
//         },
//         {
//             "COLUMN_NAME": "accuracyClass",
//             "COLUMN_COMMENT": "Accuracy class"
//         },
//         {
//             "COLUMN_NAME": "seal",
//             "COLUMN_COMMENT": "Seal"
//         },
//         {
//             "COLUMN_NAME": "self_aligningForCompensationOfMisalignments",
//             "COLUMN_COMMENT": "Self-aligning for compensation of misalignments"
//         },
//         {
//             "COLUMN_NAME": "widthOfRunnerBlock_mm_",
//             "COLUMN_COMMENT": "Width of runner block [mm]"
//         },
//         {
//             "COLUMN_NAME": "lengthOfRunnerBlock_mm_",
//             "COLUMN_COMMENT": "Length of runner block [mm]"
//         },
//         {
//             "COLUMN_NAME": "heightOfRunnerBlock_mm_",
//             "COLUMN_COMMENT": "Height of runner block [mm]"
//         },
//         {
//             "COLUMN_NAME": "heightOfRunnerBlockWithGuideRail_mm_",
//             "COLUMN_COMMENT": "Height of runner block with guide rail [mm]"
//         },
//         {
//             "COLUMN_NAME": "lubrication",
//             "COLUMN_COMMENT": "Lubrication"
//         },
//         {
//             "COLUMN_NAME": "dynamicLoadCapacityC_n_",
//             "COLUMN_COMMENT": "Dynamic load capacity C [N]"
//         },
//         {
//             "COLUMN_NAME": "footnoteDynamicLoadCapacityC",
//             "COLUMN_COMMENT": "Footnote dynamic load capacity C"
//         },
//         {
//             "COLUMN_NAME": "staticLongitudinalMomentLoadCapacityMl0_nm_",
//             "COLUMN_COMMENT": "Static longitudinal moment load capacity ML0 [Nm]"
//         },
//         {
//             "COLUMN_NAME": "staticTorsionalMomentLoadCapacityMt0_nm_",
//             "COLUMN_COMMENT": "Static torsional moment load capacity Mt0 [Nm]"
//         },
//         {
//             "COLUMN_NAME": "max_AccelerationAmax_m_s__",
//             "COLUMN_COMMENT": "Max. acceleration amax [m/s²]"
//         },
//         {
//             "COLUMN_NAME": "note_Max_AccelerationAmax",
//             "COLUMN_COMMENT": "Note: Max. acceleration amax"
//         },
//         {
//             "COLUMN_NAME": "maximumPermissibleLinearSpeedVmax_m_s_",
//             "COLUMN_COMMENT": "Maximum permissible linear speed vmax [m/s]"
//         },
//         {
//             "COLUMN_NAME": "dynamicTorsionalMomentLoadCapacityMt_nm_",
//             "COLUMN_COMMENT": "Dynamic torsional moment load capacity Mt [Nm]"
//         },
//         {
//             "COLUMN_NAME": "dynamicTorsionalMomentLoadCapacityMtFootnote",
//             "COLUMN_COMMENT": "Dynamic torsional moment load capacity Mt footnote"
//         },
//         {
//             "COLUMN_NAME": "dynamicLongitudinalMomentLoadCapacityMl_nm_",
//             "COLUMN_COMMENT": "Dynamic longitudinal moment load capacity ML [Nm]"
//         },
//         {
//             "COLUMN_NAME": "dynamicLongitudinalMomentLoadCapacityMlFootnote",
//             "COLUMN_COMMENT": "Dynamic longitudinal moment load capacity ML footnote"
//         },
//         {
//             "COLUMN_NAME": "staticLoadRatingC0_n_",
//             "COLUMN_COMMENT": "Static load rating C0 [N]"
//         },
//         {
//             "COLUMN_NAME": "permissibleAmbientTemperature",
//             "COLUMN_COMMENT": "Permissible ambient temperature"
//         },
//         {
//             "COLUMN_NAME": "footnotePermissibleAmbientTemperature_min___Max_",
//             "COLUMN_COMMENT": "Footnote permissible ambient temperature (min ... max)"
//         },
//         {
//             "COLUMN_NAME": "frictionCoefficient_",
//             "COLUMN_COMMENT": "Friction coefficient μ"
//         },
//         {
//             "COLUMN_NAME": "footnoteFrictionCoefficient_",
//             "COLUMN_COMMENT": "Footnote friction coefficient μ"
//         },
//         {
//             "COLUMN_NAME": "pitchTGuideRail_mm_",
//             "COLUMN_COMMENT": "Pitch T guide rail [mm]"
//         },
//         {
//             "COLUMN_NAME": "version",
//             "COLUMN_COMMENT": "Version"
//         },
//         {
//             "COLUMN_NAME": "weight_kg_",
//             "COLUMN_COMMENT": "Weight [kg]"
//         },
//         {
//             "COLUMN_NAME": "dimensionA_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension A (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionA1_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension A1 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionA2_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension A2 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionA3_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension A3 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionB_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension B (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionBTolerance_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension B tolerance (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionB1_mm_",
//             "COLUMN_COMMENT": "Dimension B1 [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionE1_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension E1 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionE2_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension E2 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionE8_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension E8 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionE9_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension E9 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionH_profiledRailSystem__mm_",
//             "COLUMN_COMMENT": "Dimension H (profiled rail system) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionH1_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension H1 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionH2WithCoverStrip_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension H2 with cover strip (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionH2WithoutCoverStrip_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension H2 without cover strip (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionK1_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension K1 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionK2_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension K2 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionK3_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension K3 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionK4_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension K4 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionN3_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension N3 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionN6_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension N6 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionN6Tolerance_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension N6 tolerance (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionS2_profiledRailSystems_",
//             "COLUMN_COMMENT": "Dimension S2 (profiled rail systems)"
//         },
//         {
//             "COLUMN_NAME": "dimensionS5_profiledRailSystem__mm_",
//             "COLUMN_COMMENT": "Dimension S5 (profiled rail system) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionS9ThreadDiameterXLead_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension S9 thread diameter x lead (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionT1Min_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension T1 min (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionV1_mm_",
//             "COLUMN_COMMENT": "Dimension V1 [mm]"
//         },
//         {
//             "COLUMN_NAME": "dataSheet",
//             "COLUMN_COMMENT": "Data sheet"
//         },
//         {
//             "COLUMN_NAME": "operatingInstructions",
//             "COLUMN_COMMENT": "Operating instructions"
//         },
//         {
//             "COLUMN_NAME": "_2dCad_0",
//             "COLUMN_COMMENT": "2D CAD_0"
//         },
//         {
//             "COLUMN_NAME": "_2dCad_1",
//             "COLUMN_COMMENT": "2D CAD_1"
//         },
//         {
//             "COLUMN_NAME": "_3dCad_2",
//             "COLUMN_COMMENT": "3D CAD_2"
//         },
//         {
//             "COLUMN_NAME": "_3dCad_3",
//             "COLUMN_COMMENT": "3D CAD_3"
//         },
//         {
//             "COLUMN_NAME": "productlink",
//             "COLUMN_COMMENT": "productLink"
//         },
//         {
//             "COLUMN_NAME": "sealFootnote",
//             "COLUMN_COMMENT": "Seal footnote"
//         },
//         {
//             "COLUMN_NAME": "_3dCad_1",
//             "COLUMN_COMMENT": "3D CAD_1"
//         },
//         {
//             "COLUMN_NAME": "_2dCad_3",
//             "COLUMN_COMMENT": "2D CAD_3"
//         },
//         {
//             "COLUMN_NAME": "_3dCad_0",
//             "COLUMN_COMMENT": "3D CAD_0"
//         },
//         {
//             "COLUMN_NAME": "_2dCad_2",
//             "COLUMN_COMMENT": "2D CAD_2"
//         },
//         {
//             "COLUMN_NAME": "dimensionE3_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension E3 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionE8_1_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension E8.1 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionE9_1_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension E9.1 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "maximumDynamicLoadFmax_n_",
//             "COLUMN_COMMENT": "Maximum dynamic load Fmax [N]"
//         },
//         {
//             "COLUMN_NAME": "maximumPermissibleTorsionalMomentMtMax_nm_",
//             "COLUMN_COMMENT": "Maximum permissible torsional moment Mt max [Nm]"
//         },
//         {
//             "COLUMN_NAME": "maximumPermissibleLongitudinalLoadMomentMlMax_nm_",
//             "COLUMN_COMMENT": "Maximum permissible longitudinal load moment ML max [Nm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionN1_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension N1 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionN2_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension N2 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionN4_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension N4 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionS1_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension S1 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionS11_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension S11 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "massM_g_",
//             "COLUMN_COMMENT": "Mass m [g]"
//         },
//         {
//             "COLUMN_NAME": "_3dCad_4",
//             "COLUMN_COMMENT": "3D CAD_4"
//         },
//         {
//             "COLUMN_NAME": "sizeFootnote",
//             "COLUMN_COMMENT": "Size footnote"
//         },
//         {
//             "COLUMN_NAME": "dimensionH2_profiledRailSystems__mm_",
//             "COLUMN_COMMENT": "Dimension H2 (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "dimensionS9ThreadDiameterXLeadWithTolerance_profiledRailSystems",
//             "COLUMN_COMMENT": "Dimension S9 thread diameter x lead with tolerance (profiled rail systems) [mm]"
//         },
//         {
//             "COLUMN_NAME": "_2dCad_dwg__2",
//             "COLUMN_COMMENT": "2D CAD (DWG)_2"
//         },
//         {
//             "COLUMN_NAME": "_2dCad_dxf__3",
//             "COLUMN_COMMENT": "2D CAD (DXF)_3"
//         },
//         {
//             "COLUMN_NAME": "heightOfGuideRailH2WithCoverStrip_mm_",
//             "COLUMN_COMMENT": "Height of guide rail H2 with cover strip [mm]"
//         }
//     ]
// }
//   let comments=data.comments.reduce((acc,curr)=>{
//     acc[curr['COLUMN_NAME']]=curr['COLUMN_COMMENT']
//     return acc
//   },{})

//   let answerList=data.result.map(item=>{
//     return Object.keys(item).reduce((acc,curr)=>{
//       acc[comments[curr]]=item[curr]
//       return acc
//     },{})
//   })

//   setQuestionList([
//     { question: inputValue.toString(), answer: JSON.stringify(answerList) },
//     ...questionList
    
//   ]);
// },[])  
  

  



  return (
    <> 
   { questionList.map(q=>(<List data={q} />)) }
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Message ChatGPT"
        className="input-field"
      />
      <button type="submit" className="submit-button">
        <i className="fas fa-arrow-up"></i>
      </button>
    </form>
    </>
  );
};



export default Ask;
