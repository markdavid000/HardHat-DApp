import "./App.css";
import contractABI from "./abi.json";
import React from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ethers = require("ethers");

function App() {
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function handleUpdateName(updatedName) {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const contractAddress = "0xA0b4775E8a277749dFBB8C9b9327d57c09Ac8f6E";

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const handleUpdateName = await contract.updateName(updatedName);

        await handleUpdateName.wait();

        toast.success("Message set successfully", {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } catch (err) {
        toast.error("User Rejected Transaction", {
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  }

  async function handleUpdateAge(updatedAge) {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const contractAddress = "0xA0b4775E8a277749dFBB8C9b9327d57c09Ac8f6E";

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const handleUpdateAge = await contract.updateAge(updatedAge);

        await handleUpdateAge.wait();

        toast.success("Message set successfully", {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } catch (err) {
        toast.error("User Rejected Transaction", {
          autoClose: 10000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.error(err);
      }
    }
  }

  async function handleGetDetails() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const contractAddress = "0xA0b4775E8a277749dFBB8C9b9327d57c09Ac8f6E";

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.getEntityDetails();

        console.log(transaction);

        toast.success(transaction, {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } catch (err) {
        toast.error("Failed to get Message", {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex">
          <button
            className="neon-button"
            onClick={() => handleUpdateName("Mark-David")}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Update Name
          </button>
          <button className="neon-button" onClick={() => handleUpdateAge(20)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Update Age
          </button>
          <button className="neon-button" onClick={handleGetDetails}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Get Entity Details
          </button>
        </div>
        <ToastContainer theme="colored" transition={Flip} />
      </header>
    </div>
  );
}

export default App;
