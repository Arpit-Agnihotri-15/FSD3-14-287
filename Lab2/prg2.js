import { mkdir, rm } from "fs/promises";

//creates a folder
//await mkdir("uploads");

//creates a folder inside another folder
//await mkdir("uploads/images");

//creates main and sub folder and sub-sub  folder
//await mkdir("docs/resumes/data", { recursive: true});

//removes only data folder
//await rm("docs/resumes/data", {recursive: true});

//removes main folder and sub folder also
//await rm("docs", { recursive: true});