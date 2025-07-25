import DOMPurify from "dompurify";
import React from "react";

export const toIndianCurrency = (num) => {
  const curr = num.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return curr;
};

export const shortString = (name, count) => {
  var string = name;
  var count = count;
  var result = string.slice(0, count) + (string.length > count ? "..." : "");
  return result;
};

export const slugify = (str) => {
  var slugstring = str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slugstring;
};
export const DateFormat = (date) => {
  const today = date;
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return yyyy + "-" + mm + "-" + dd;
};

export const CurrentDateFormat = () => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${year}-${month}-${day}`;
  return currentDate;
};

export const ensureHttps = (url, slash = false) => {
  if (url) {
    url = url.replace(/ /g, "%20");

    if (url.startsWith("http://")) {
      return url.replace("http://", "https://");
    } else if (!url.startsWith("https://")) {
      return `${slash && IMAGE_URL}${url}`;
    }
  }
  return url;
};

export const ApiContentRenderer = ({ htmlContent }) => {

  const cleanedContent = DOMPurify.sanitize(
    htmlContent?.replace(/&nbsp;/g, " ")
  );
  return <div className="html-content" dangerouslySetInnerHTML={{ __html: cleanedContent }} />;
};