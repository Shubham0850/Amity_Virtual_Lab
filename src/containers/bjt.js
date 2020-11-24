import React from 'react'
import ExperimentCard from '../components/experimentCard'
import SmallNav from '../components/smallNav'

export default function BJT(){
    return(
        <div className="pn-junction">
            <SmallNav head={"BJT Common Characteristics"} link={"/electronics"}/>
            <ExperimentCard name={"BJT Common Base Characteristics"} link={"bjt-base"}/>
            <ExperimentCard name={"BJT Common Emitter Characteristics"} link={"bjt-emitter"}/>
        </div>
    )
}