import axios from "axios";
import { ThreeDots } from "react-bootstrap-icons";
import toast from "react-hot-toast";

interface PropData {
  action: string;
  body?: any;
  isFormData?: boolean;
  isShowError?: boolean;
  id?: string;
  type?: string;
  key?: string;
  file?: any;
}

const WebService = {
  getAccesstoken: function (props: PropData) {
    this.addLoader(props?.id);
    let url = this.getBaseUrl(props.type);
    return new Promise((resolve, reject) => {
      var bodyFormData = new URLSearchParams();
      for (let key in props.body) {
        bodyFormData.append(key, props.body[key]);
      }
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        tenantId: "" + localStorage.getItem("tenantId"),
      };
      axios
        .post(`${url}${props.action}`, bodyFormData, {
          headers: headers,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.access_token);
          resolve(response.data);
          this.removeLoader(props?.id);
        })
        .catch((error) => {
          this.removeLoader(props?.id);
          reject(this.errorHandler(error));
        });
    });
  },

  postAPI: function <T>(props: PropData) {
    this.addLoader(props?.id);
    let url = this.getBaseUrl(props.type);
    return new Promise<T>((resolve, reject) => {
      var bodyFormData = new URLSearchParams();
      for (let key in props.body) {
        bodyFormData.append(key, props.body[key]);
      }
      axios
        .post(
          `${url}${props.action}`,
          props.isFormData ? bodyFormData : props.body,
          {
            headers: this.getHeaders(),
          }
        )
        .then((response) => {
          resolve(response.data);
          this.removeLoader(props?.id);
        })
        .catch((error) => {
          if (error && error.response && error.response.status == 401) {
            this.clearLocalStorage();
            window.location.href = "/";
          }
          this.removeLoader(props?.id);
          reject(this.errorHandler(error));
        });
    });
  },

  putAPI: function (props: PropData) {
    this.addLoader(props?.id);
    let url = this.getBaseUrl(props.type);
    return new Promise((resolve, reject) => {
      var bodyFormData = new URLSearchParams();
      for (let key in props.body) {
        bodyFormData.append(key, props.body[key]);
      }
      axios
        .put(`${url}${props.action}`, props.body, {
          headers: this.getHeaders(),
        })
        .then((response) => {
          resolve(response.data);
          this.removeLoader(props?.id);
        })
        .catch((error) => {
          if (error && error.response && error.response.status == 401) {
            this.clearLocalStorage();
            window.location.href = "/";
          }
          this.removeLoader(props?.id);
          reject(this.errorHandler(error));
        });
    });
  },

  // getAPI: function <T>(props: PropData) {
  //   this.addLoader(props?.id);
  //   let url = this.getBaseUrl(props.type);
  //   return new Promise<T>((resolve, reject) => {
  //     axios
  //       .get(`${url}${props.action}`, {
  //         headers: this.getHeaders(),
  //       })
  //       .then((response) => {
  //         resolve(response.data);
  //         this.removeLoader(props?.id);
  //       })
  //       .catch((error) => {
  //         if (error && error.response && error.response.status == 401) {
  //           this.clearLocalStorage();
  //           window.location.href = "/";
  //         }
  //         this.removeLoader(props?.id);
  //         reject(this.errorHandler(error));
  //       });
  //   });
  // },

  getAPI: function <T>(props: PropData) {
    let params = new URLSearchParams();
    for (let key in props.body) {
      params.set(key, props.body[key]);
    }
    this.addLoader(props?.id);
    let url = this.getBaseUrl(props.type);
    return new Promise<T>((resolve, reject) => {
      axios
        .get(`${url}${props.action}`, {
          params: params,
          headers: this.getHeaders(),
        })
        .then((response) => {
          resolve(response.data);
          this.removeLoader(props?.id);
        })
        .catch((error) => {
          if (error && error.response && error.response.status == 401) {
            this.clearLocalStorage();
            window.location.href = "/";
          }
          this.removeLoader(props?.id);
          reject(this.errorHandler(error));
        });
    });
  },

  deleteAPI: function (props: PropData) {
    this.addLoader(props?.id);
    let url = this.getBaseUrl(props.type);
    return new Promise((resolve, reject) => {
      axios
        .delete(`${url}${props.action}`, {
          headers: this.getHeaders(),
        })
        .then((response) => {
          resolve(response.data);
          this.removeLoader(props?.id);
        })
        .catch((error) => {
          if (error && error.response && error.response.status == 401) {
            this.clearLocalStorage();
            window.location.href = "/";
          }
          this.removeLoader(props?.id);
          reject(this.errorHandler(error));
        });
    });
  },

  fileUploadAPI: function (props: PropData) {
    var formData = new FormData();
    if (!props.key) {
      props.key = "file";
    }
    formData.append(props.key, props.file);
    for (let key in props.body) {
      formData.append(key, props.body[key]);
    }
    this.addLoader(props?.id);
    let url = this.getBaseUrl();
    return new Promise((resolve, reject) => {
      axios
        .post(`${url}${props.action}`, formData, {
          headers: this.getHeaders(),
        })
        .then((response) => {
          resolve(response.data);
          this.removeLoader(props?.id);
        })
        .catch((error) => {
          // props.isShowError ? reject(this.errorHandler(error)) : reject(error);
          this.errorHandler(error);
          this.removeLoader(props?.id);
        });
    });
  },

  getHeaders: function () {
    if (!localStorage.getItem("locale")) {
      localStorage.setItem("locale", "en");
    }
    return {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
      locale: "" + localStorage.getItem("locale"),
      tenantId: "" + localStorage.getItem("tenantId"),
    };
  },

  errorHandler: function (error: any) {
    if (error?.response) {
      error = error.response;
    }
    var errorMessage;
    if (!error || !error.status) {
      errorMessage = "Server Not Responding";
    } else if (error.status === 401) {
      this.clearLocalStorage();
      window.location.href = "/";
    } else if (error.status === 500) {
      errorMessage =
        (error &&
          error.data &&
          error.data.ErrorDetails &&
          error.data.ErrorDetails.message) ||
        "An unkown exception has occured. Please contact to administrator";
    } else {
      errorMessage = error.data.message;
    }
    toast.error(errorMessage);
    return errorMessage;
  },

  addLoader(id: any) {
    if (id) {
      var button = document.getElementById(id) as HTMLButtonElement | null;
      if (button != null) {
        button.disabled = true;
        var loader = document.createElement("img");
        loader.src = "/images/loading.gif";
        loader.className = "button-loader";
        button.prepend(loader);
      }
    }
  },

  removeLoader(id: any) {
    if (id) {
      var button = document.getElementById(id) as HTMLButtonElement | null;
      if (button != null) {
        button.disabled = false;
        button.removeChild(button.childNodes[0]);
      }
    }
  },

  clearLocalStorage() {
    localStorage.removeItem("token");
    localStorage.removeItem("loginUserImage");
    localStorage.removeItem("uuid");
  },


  getBaseUrl(type?: string) {
    // return "https://scipapi.winayak.com/super-admin";
    // return "https://scipapi.winayak.com/admin";
    // return "http://127.0.0.1:8000/admin";
    // return "http://127.0.0.1:8000/api/";

    // return localStorage.getItem("api_base_url")
    //   ? localStorage.getItem("api_base_url")
    //   : "https://scipapi.winayak.com/super-admin";

    return localStorage.getItem("api_base_url")
      ? localStorage.getItem("api_base_url")
      : "http://127.0.0.1:8000/super-admin";
  },
  getSubDomain() {
    if (window.location.hostname == 'localhost') {
      return '';
    } else {
      return window.location.hostname;
    }

  },
};
export default WebService;

