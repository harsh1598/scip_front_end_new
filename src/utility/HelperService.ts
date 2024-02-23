import moment from "moment";
const HelperService = {
  formatPrice(value: number) {
    if (!value) {
      return 0.0;
    }
    return Intl.NumberFormat("en-US").format(value);
  },

  getDateFormat(dt: any) {
    return moment.utc(dt).local().format("MMM DD, YYYY");
  },

  getUpdatedFormatedDate(dt: any) {
    return moment.utc(dt).local().format("YYYY-MM-DD hh:mm:ss");
  },

  getUpdatedFormatedTime(dt: any) {
    return moment.utc(dt).local().format("YYYY-MM-DD | hh:mm A");
  },

  getUpdatedFormatedTimeWithSlash(dt: any) {
    return moment.utc(dt).local().format("DD/MM/YYYY  hh:mm A");
  },

  getFormatedTime(dt: any) {
    return moment.utc(dt).local().format("hh:mm A");
  },

  sendFormatedDate(dt: any) {
    return moment(dt).format("YYYY-MM-DD");
  },

  getTimeDifference(in_time: any) {
    in_time = this.getUpdatedFormatedDate(in_time);
    var out_time: any = this.getUpdatedFormatedDate(new Date());
    if (in_time && out_time && in_time < out_time) {
      var dateA = new Date(in_time);
      var dateB = new Date(out_time);
      var time = (dateB.getTime() - dateA.getTime()) / 1000;
      if (time > 0 && time < 60) {
        return Math.floor(time) + " secs ago";
      } else if (time > 60 && time < 3600) {
        time = time / 60;
        if (time > 1 && time < 2) {
          return Math.floor(time) + " min ago";
        } else {
          return Math.floor(time) + " mins ago";
        }
      } else if (time > 3600 && time < 86400) {
        time = time / 3600;
        if (time > 1 && time < 2) {
          return Math.floor(time) + " hr ago";
        } else {
          return Math.floor(time) + " hrs ago";
        }
      } else if (time > 86400) {
        time = time / 86400;
        if (time > 1 && time < 2) {
          return Math.floor(time) + " day ago";
        } else {
          return Math.floor(time) + " days ago";
        }
      }
    }
  },

  getText(text: any, length: any) {
    if (text && length && text.length > length) {
      return text.substring(0, length) + '...';
    }

    return text;
  },

  getFormatedDatewithMonthName(dt: any) {
    return moment(dt).format("MMM DD, YYYY");
  },

  getOrderDateFormat(dt: any) {
    return moment.utc(dt).local().format("DD-MM-YYYY");
  },

  getOrderDateFormatWithSlash(dt: any) {
    return moment.utc(dt).local().format("DD/MM/YYYY");
  },

  getOrderDateFormatWithTime(dt: any) {
    return moment.utc(dt).local().format("DD-MM-YYYY HH:mm a");
  },

  getDateFormate(dt: any) {
    return moment(dt).format("DD-MM-YYYY");
  },

  maxNumber(e: any, maxNumber: number) {
    if (maxNumber && e.currentTarget.value.length > maxNumber) {
      e.preventDefault();
      return false;
    }
  },

  isValidEmail(email: string) {
    let strRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
    return email ? strRegex.test(email) : true;
  },
  isValidurlPatternValidation(URL: any) {
    const regex = new RegExp(
      /^((http|https):\/\/.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,15}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$/g
    );
    return URL ? regex.test(URL) : true;
  },

  removeUnderscoreWithCapitalLetter(str: any) {
    // Replace underscores with spaces
    const stringWithSpaces = str.replace(/_/g, ' ');

    // Capitalize the first letter of each word
    const words = stringWithSpaces.split(' ');
    const capitalizedWords = words.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words back together
    const result = capitalizedWords.join(' ');

    return result;
  },

  allowOnlyNumericValue(e: any, maxlength?: any) {
    var numbers = /^[0-9]$/;
    if (!e.key.match(numbers) && e.keyCode != 8) {
      e.preventDefault();
      return false;
    }

    if (maxlength > 0) {
      if (e.key != "Backspace" && e.target.value.length >= maxlength) {
        e.preventDefault();
        return false;
      }
    }
  },
  allowMaxValue(e: any, maxlength?: any) {
    if (maxlength && maxlength > 0) {
      if (e.key != "Backspace" && e.target.value.length >= maxlength) {
        e.preventDefault();
        return false;
      }
    }
  },

  allowDecimalValue(e: any) {
    var charCode = e.which ? e.which : e.keyCode;
    var number = e.target.value.split(".");
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
      e.preventDefault();
    }
    //just one dot
    if (number.length > 1 && charCode == 46) {
      e.preventDefault();
    }
    //get the carat position
    var caratPos = this.getSelectionStart(e.target);
    var dotPos = e.target.value.indexOf(".");
    if (caratPos > dotPos && dotPos > -1 && number[1].length > 1) {
      e.preventDefault();
    }
  },

  getSelectionStart(o: any) {
    // if (o.createTextRange) {
    //   var r = document.selection.createRange().duplicate();
    //   r.moveEnd("character", o.value.length);
    //   if (r.text == "") return o.value.length;
    //   return o.value.lastIndexOf(r.text);
    // } else return o.selectionStart;
  },

  // allowOnlyDecimalValue(e: any) {
  //   var numbers = /^\d+(?:\.\d{1,2})?$/;
  //   if (!e.key.match(numbers) && e.keyCode != 8) {
  //     e.preventDefault();
  //     return false;
  //   }

  //   if (e.key != "Backspace" && e.target.value.length >= 10) {
  //     e.preventDefault();
  //     return false;
  //   }
  // },

  formateDecimal(value: any) {
    return value ? parseFloat(value).toFixed(2) : "";
  },

  geturlextension(url: any) {
    return url.split(/[#?]/)[0].split(".").pop().trim();
  },

  getTitleCase(value: any) {
    if (!value) {
      return "";
    } else {
      var str = "";
      var arr = value.split("_");
      for (var i in arr) {
        if (Number(i) == 0) {
          str =
            arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase();
        } else {
          str +=
            "" +
            arr[i].charAt(0).toUpperCase() +
            arr[i].substring(1).toLowerCase();
        }
      }
      return str;
    }
  },

  convertTimeTodate(value: any) {

    const [hours, minutes, seconds] = value.split(':');
    // Create a new Date object and set the time components
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    date.setSeconds(parseInt(seconds, 10));
    return date;
    
  },

  getYear(value: any) {

    let date = new Date();
    const newDate = new Date(date); // Create a new Date object with the same date as the initial date
    newDate.setFullYear(value); // Set the year component of the new Date object
    return newDate; 
    
  },

  seo(data: any) {
    // console.log('data: ', data)
    data.title = data.title || "Default title";
    data.metaDescription = data.description || "Default description";
    document.title = data.title;
    var doc = document.querySelector('meta[name="description"]') as HTMLElement;
    if (doc) {
      doc.setAttribute("content", data.metaDescription);
    }
    // console.log('doc: ', doc)
    // if (document.getElementsByTagName('meta') && document.getElementsByTagName('meta')[3]) {
    //   document.getElementsByTagName('meta')[3].content = "New meta description!"
    // }
  },
  removeHtml(data: string) {
    if (data) {
      return data
        .replace(/<\/?[^>]+(>|$)/g, " ")
        .replace(/\&nbsp;/g, "")
        .replaceAll("&amp;", "&")
        .replaceAll("&quot;", '"')
        .replaceAll("&#39;", "'")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .trim();
    }

    return "";
  },
};



export default HelperService;
