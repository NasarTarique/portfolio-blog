import React from "react";
import { useParams } from "react-router-dom";
import './styles/read.css'
const Read = ()=>{
		let  {id} = useParams();
		return (
				<div class="read-container">
						<h1>id</h1>
				</div>
		)
}

export default Read;
