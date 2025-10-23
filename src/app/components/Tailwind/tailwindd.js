"use client";
import React from "react";
import styles from "../Tailwind/styles.module.css";

// import {
//   Table,
//   TableHeader,
//   TableBody,
//   TableColumn,
//   TableRow,
//   TableCell,
// } from "@heroui/table";
const Tailwind = () => {
  return (
    <>
      <div 
        className="flex flex-col items-center gap-4
                sm:flex-row sm:justify-center sm:gap-6 
                md:space-x-6 lg:space-y-0"
      >
        <div className="h-16 w-10/12 sm:w-[10%] rounded-full bg-blue-500"></div>
        <div className="h-16 w-10/12 sm:w-[10%] rounded-full bg-orange-500"></div>
        <div className="h-16 w-10/12 sm:w-[10%] rounded-full bg-green-500"></div>
        {/* <div className={` bg-green-500 dark:bg-red-500 text-red-500 dark:text-green-500`}>
            <p>Items screen block-hidden</p>
        </div> */}
      </div>
      <div className="flex justify-center items-center">
        {/* <Table className="flex justify-center" aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tony Reichert</TableCell>
              <TableCell>CEO</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Zoey Lang</TableCell>
              <TableCell>Technical Lead</TableCell>
              <TableCell>Paused</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Jane Fisher</TableCell>
              <TableCell>Senior Developer</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>William Howard</TableCell>
              <TableCell>Community Manager</TableCell>
              <TableCell>Vacation</TableCell>
            </TableRow>
          </TableBody>
        </Table> */}
      </div>
    </>
  );
};

export default Tailwind;
