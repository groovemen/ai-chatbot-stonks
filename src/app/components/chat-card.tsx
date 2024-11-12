"use client";

import React, { useState } from "react";
import {Card, CardHeader, CardBody, CardFooter, Button} from "@nextui-org/react";
import stockData from "../../../db/chatbot-stock-data.json"

export default function ChatCard() {
  const [currentExchange, setCurrentExchange] = React.useState(null);
  const [currentStock, setCurrentStock] = React.useState(null);

  const handleSelectExchange = (exchange: React.SetStateAction<null>) => {
    setCurrentExchange(exchange);
    setCurrentStock(null);
  } ;

  const handleSelectStock = (stock: React.SetStateAction<null>) => {
    setCurrentStock(stock);
  }

  return (
    <Card className="absolute bottom-20 right-5 max-w-[540px] min-w-[500px]">
      <CardHeader className="justify-between border-b border-white/30">
        <div className="flex gap-5">
        <svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fff"><path d="M12 22L3.30863 17.1715C3.11815 17.0656 3.00001 16.8649 3.00001 16.647L2.99999 7.35304C2.99999 7.13514 3.11813 6.93437 3.30861 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8819 6.93437 21 7.13514 21 7.35304L21 11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.52844 7.29363L11.7086 11.8382C11.8898 11.9388 12.1102 11.9388 12.2914 11.8382L20.5 7.27783" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12V17.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 2V9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.6569 17.2427L19.364 17.9498" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2426 18.6567L17.9497 19.3638" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.6569 14.4144L14.4142 18.6571C13.6332 19.4381 13.6332 20.7045 14.4142 21.4855L15.1213 22.1926C15.9024 22.9737 17.1687 22.9737 17.9497 22.1926L22.1924 17.95C22.9734 17.1689 22.9734 15.9026 22.1924 15.1215L21.4853 14.4144C20.7042 13.6334 19.4379 13.6334 18.6569 14.4144Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">LSEG Chatbot</h4>
          </div>
        </div>
        <Button
          className="bg-transparent text-foreground border-default-200"
          color="primary"
          radius="full"
          size="sm"
          variant="solid"
        >
            X
        </Button>
      </CardHeader>
      <CardBody className="px-3 text-default-400">
        {!currentExchange && (
          <div className="flex flex-col">
            <h5 className="mb-4">Please select a Stock Exchange</h5>
            {stockData.map((exchange: { code: any; stockExchange: any; }) => (
              <Button className="rounded-none mb-1" key={exchange.code} onClick={() => handleSelectExchange(exchange)}>
                {exchange.stockExchange}
              </Button>
            ))}
          </div>
        )}
        {currentExchange && !currentStock && (
          <div className="flex flex-col">
            <h5 className="mb-4">Please select a Stock</h5>
            {currentExchange.topStocks.map((stock) => (
              <Button className="rounded-none mb-1" key={stock.code} onClick={() => handleSelectStock(stock)}>
                {stock.stockName}
              </Button>
            ))}
            <Button className="rounded-none mb-1" variant="bordered" onClick={() => setCurrentExchange(null)}>
              Back
            </Button>
          </div>
        )}
        {currentStock && (
          <div className="flex flex-col">
            <h5 className="mb-4">Stock Price of {currentStock.stockName} is <b className="text-white">{currentStock.price}</b></h5>
            <Button className="rounded-none mb-1" variant="bordered" onClick={() => setCurrentStock(null)}>
              Back
            </Button>
          </div>
        )}
        
      </CardBody>
      <CardFooter className="gap-3">
        <p className="font-semibold text-default-400 text-small">Please pick an option</p>
      </CardFooter>
    </Card>
  );
}
