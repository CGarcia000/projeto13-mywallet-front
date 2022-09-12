import GlobalStyle from "../assets/css/GlobalStyle";

import { useState, createContext } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../assets/css/index.css';

import { Login } from './LoginPages/Login'
import { RegisterPage } from "./LoginPages/RegisterPage";
import { Home } from "./WalletPages/Home";
import { InputRegister } from "./WalletPages/AddRegisters/InputRegister";
import { OutputRegister } from "./WalletPages/AddRegisters/OutputRegister";

export const UserContext = createContext();

function App() {
	const [user, setUser] = useState({});

	return (
		<>
			<GlobalStyle />

			<UserContext.Provider value={[user, setUser]}>

				<BrowserRouter>

					<Routes>
						<Route path='/' element={<Login />}></Route>
						<Route path='/cadastro' element={<RegisterPage />}></Route>
						<Route path='/home' element={<Home />}></Route>
						<Route path='/home/input' element={<InputRegister />}></Route>
						<Route path='/home/output' element={<OutputRegister />}></Route>
					</Routes>

				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App; 
