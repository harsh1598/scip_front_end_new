import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Container,
  Button,
  UncontrolledTooltip,
  Input,
  DropdownToggle,
  DropdownMenu,
  Dropdown,
  DropdownItem,
  Row,
  Col,
  Card,
  CardBody,
  UncontrolledDropdown,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane, Form, Label,
  Accordion, AccordionItem, Collapse,
  Offcanvas, OffcanvasBody, OffcanvasHeader, Modal, ModalHeader, ModalFooter
} from "reactstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import classnames from "classnames";
import Picker from '@emoji-mart/react';
import Emojidata from "@emoji-mart/data";
import { Controller, useForm } from "react-hook-form";
//Import Icons
import PersonalInfo from "./PersonalInfo";
//redux
import { useDispatch } from "react-redux";
import userDummayImage from "../../assets/images/users/user-dummy-img.jpg";
//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { InfoCircle, PencilSquare, Search, Download, EmojiSmile, Filter } from "react-bootstrap-icons";
import WebService from "../../utility/WebService";
import toast from "react-hot-toast";
import HelperService from "../../utility/HelperService";
import AddBroadcast from "./AddBroadCast";
import AddContacts from "./AddContact";
import FilesFolder from "./FilesFolder";
import AddGroup from "./AddGroup";
import Loader from "../../Components/Loader/Loader";
import PptIcon from "../../assets/images/ppt.png";
import PdfIcon from "../../assets/images/pdf.png";
import XlsIcon from "../../assets/images/xls.png";
import CsvIcon from "../../assets/images/csv.png";
import DocIcon from "../../assets/images/doc.png";
import * as animatedData from "../../assets/test.json";

//Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import CustomDatePicker from "../../Components/CustomDatePicker/CustomDatePicker";
import Lottie from "react-lottie";

interface propData {
  show: boolean;
  onCloseClick: any;
  formData: any;
  setFormData: any;
  getlist: any;
  subStageId?: any;
  stageId?: any;
};

const animatedComponents = makeAnimated();

function showFoldersDiv() {
  var foldersDiv = document.getElementById("foldersWrap") || null;
  var filesDiv = document.getElementById("filesWrap") || null;
  if (filesDiv && foldersDiv && foldersDiv.style.display === "none") {
    foldersDiv.style.display = "block";
    filesDiv.style.display = "none";
  } else {
    if (foldersDiv) {
      foldersDiv.style.display = "none";
    }
  }
}

const Chat = (page: any, props: propData) => {

  const [selectUser, setSelectUser] = useState(null);
  function handleSelectUser(selectUser?: any) {
    setSelectUser(selectUser);
  }
  const UserOptions = [
    { value: 'Option 1', label: 'Option 1' },
    { value: 'Option 2', label: 'Option 2' },
    { value: 'Option 3', label: 'Option 3 ' },
    { value: 'Option 4', label: 'Option 4' },
    { value: 'Option 5', label: 'Option 5 ' },
    { value: 'Option 6', label: 'Option 6' },

  ];

  const [isRight, setIsRight] = useState(false);
  const toggleRightCanvas = () => {
    setIsRight(!isRight);
  };

  const [isAddGroup, setIsAddGroup] = useState(false);
  const toggleAddGroup = () => {
    setIsAddGroup(!isAddGroup);
  };

  const [isEditGroup, setIsEditGroup] = useState(false);
  const toggleEditGroup = () => {
    setIsEditGroup(!isEditGroup);
  };

  const [isBroadcast, setIsBroadcast] = useState(false);

  //   const toggleBroadcast = () => {
  // alert('Xcfgf')
  //     setIsShowAddBroadcast(true);
  //   };

  //   const onCloseBroadcast = () => {
  //     setIsBroadcast(false)
  //   }



  // Accordion Flush
  const [col1, setcol1] = useState(false);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);
  const [col4, setcol4] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const {
    register: register2,
    watch: watch2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
    reset: reset2,
    setValue: setValue2
  } = useForm();
  const {
    register: register3,
    watch: watch3,
    control: control3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3 },
    reset: reset3,
    setValue: setValue3
  } = useForm();
  const {
    register: register4,
    watch: watch4,
    control: control4,
    handleSubmit: handleSubmit4,
    formState: { errors: errors4 },
    reset: reset4,
    setValue: setValue4
  } = useForm();
  const watchAllFields = watch();
  const watchAllFields2 = watch2();
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab: any) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  document.title = "Message | SCIP";
  const localdata = JSON.parse(localStorage.getItem("UserData") || "");
  const ref = useRef();
  const dispatch = useDispatch();
  const [isInfoDetails, setIsInfoDetails] = useState(false);
  const [Chat_Box_Username, setChat_Box_Username] = useState("");
  const [Chat_Box_Toid, setChat_Box_Toid] = useState("");
  const [Chat_Box_Fromid, setChat_Box_Fromid] = useState("");
  const [Chat_Box_Image, setChat_Box_Image] = useState(userDummayImage);
  const [currentRoomId, setCurrentRoomId] = useState(1);
  const [messageBox, setMessageBox] = useState<any>(null)
  const [curMessage, setcurMessage] = useState("");
  const [search_Menu, setsearch_Menu] = useState(false);
  const [settings_Menu, setsettings_Menu] = useState(false);
  const [reply, setreply] = useState<any>("");
  const [currentUser, setCurrentUser] = useState({ name: "Anna Adame", isActive: true, });
  const [chatList, setChatList] = useState<any[]>([])
  const [messageList, setMessageList] = useState<any[]>([])
  const [groupList, setGroupList] = useState<any[]>([])
  const [channelListCount, setChannelListCount] = useState<any[]>()
  const [chatListCount, setChatListCount] = useState<any[]>()
  const [loading, setLoading] = useState<any>(false);
  const chatNextOffset = useRef<any>(0);
  const isGettingData = useRef<any>(false);
  const groupNextOffset = useRef<any>(0);
  const isGettingGroupData = useRef<any>(false);
  const messageNextOffset = useRef<any>(0);
  const isGettingMessageData = useRef<any>(false);
  // const [isChat, setIsChat] = useState(true);
  const [Chat_Box_GroupName, setChat_Box_GroupName] = useState("");
  const [Chat_Box_Groupid, setChat_Box_Groupid] = useState("");
  const [Chat_Box_GroupImage, setChat_Box_GroupImage] = useState("");
  const [groupChannelList, setGroupChannelList] = useState<any[]>([])
  const groupMessageNextOffset = useRef<any>(0);
  const isGettingGroupMessageData = useRef<any>(false);
  const [attachments, setAttachments] = useState<any>([])
  const [documentName, setDocumentName] = useState('');
  const [file, setFile] = useState<any>({});
  const [contactData, setContactData] = useState<any[]>([])
  const [UserOption, setUserOption] = useState<any>([]);
  const [companyOption, setCompanyOption] = useState<any>([]);
  const [isShowAddBroadcast, setIsShowAddBroadcast] = useState(false);
  const [isShowAddContacts, setIsShowAddContacts] = useState(false);
  const [isShowAddGroup, setIsShowAddGroup] = useState(false);
  const [formData, setFormData] = useState<any>();
  const [isFiles, setIsFiles] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [showEmoji, setEmoji] = useState(false);
  const [isClickEmoji, setEmojiClick] = useState(false);
  const [cursor, setCursor] = useState<any>();
  const [showGroupEmoji, setShowGroupEmoji] = useState(false);
  const [isClickGroupEmoji, setClickGroupEmoji] = useState(false);
  const [groupCursor, setGroupCursor] = useState<any>();
  const [chatSearch, setChatSearch] = useState<any>();
  const [chatSearchList, setChatSearchList] = useState<any[]>([])
  const [groupSearch, setGroupSearch] = useState<any>();
  const [groupSearchList, setGroupSearchList] = useState<any[]>([]);
  const [fileType, setFileType] = useState<any>();
  const [filesFolderData, setFilesFolderData] = useState<any>();
  const [data, setData] = useState({ alert: false });
  const [date, setDate] = useState(null);

  useEffect(() => {
    setDocumentName('')
    getChatList();
    // getGroupList();
    getUserOptions();
    getCompanyOptions();
  }, []);

  useEffect(() => {
    if (chatSearch?.keyword) {
      getChatSearchList();
    }
  }, [chatSearch?.keyword]);

  useEffect(() => {
    if (groupSearch?.keyword) {
      getGroupSearchList();
    }
  }, [groupSearch?.keyword]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  //Use For Chat Box
  const userChatOpen = (fromId: any, name: any, status: any, roomId: any, image: any, toId: any, groupId?: any) => {
    setChat_Box_Username(name);
    setCurrentRoomId(roomId);
    setChat_Box_Image(image);
    setChat_Box_Fromid(fromId)
    setChat_Box_Toid(toId);
    messageNextOffset.current = 0;
    getChatMessagesList(toId)
    // alert(toId)
    var element = document.getElementById("MobileChatBox");
    if (element) {
      element.classList.toggle("user-chat-show");
    }
    if (element) {
      element.classList.toggle("user-chat-show");
    }
  };

  const userNetworkChatOpen = (fromId: any, name: any) => {

  }

  const groupChatOpen = (groupname: any, image: any, groupId?: any) => {

    setChat_Box_GroupName(groupname);
    setChat_Box_GroupImage(image);
    setChat_Box_Groupid(groupId)
    getGroupMessagesList(groupId)
    var element = document.getElementById("MobileGroupChatBox");
    if (element) {
      element.classList.toggle("user-chat-show");
    }
    if (element) {
      element.classList.toggle("user-chat-show");
    }
  };

  const userSearchChatOpen = (id: any, name: any, fromId: any, toImg: any, toId: any) => {
    setChat_Box_Username(name);
    setChat_Box_Fromid(fromId)
    setChat_Box_Toid(toId);
    messageNextOffset.current = 0;
    getChatMessagesList(toId)
    var element = document.getElementById("MobileChatBox");
    if (element) {
      element.classList.toggle("user-chat-show");
    }
    if (element) {
      element.classList.toggle("user-chat-show");
    }
  }

  const getChatSearchList = () => {
    setShowLoader(true)
    // isGettingData.current = true;
    // if (chatNextOffset.current < 0) {
    //   return;
    // }
    WebService.getAPI({
      action: `/message/filter?offset=${chatNextOffset.current}&limit=10&keyword=${chatSearch.keyword}`,
    })
      .then((res: any) => {
        // setChatListCount(res.count)
        setChatSearchList(res.list);
        // chatNextOffset.current = res.next_offset;
        setShowLoader(false)
      })
      .catch((error: any) => {
        setShowLoader(false)
      });
    isGettingData.current = false;
  };

  const getChatList = () => {
    setShowLoader(true)
    isGettingData.current = true;
    if (chatNextOffset.current < 0) {
      return;
    }
    WebService.getAPI({
      action: `/users-recent-message?offset=${chatNextOffset.current}&limit=20`,
    })
      .then((res: any) => {
        setChatListCount(res.count)
        setChatList([...chatList, ...res.list]);
        if (chatNextOffset.current == 0) {
          setChat_Box_Username(res.list[0].toname)
          setChat_Box_Toid(res.list[0].toId)
          // alert(res.list[0].toId)
          getChatMessagesList(res.list[0].toId)
        }
        chatNextOffset.current = res.next_offset;
        setShowLoader(false)
      })
      .catch((error: any) => {
        setShowLoader(false)
      });
    isGettingData.current = false;
  };

  const getChatMessagesList = (toId: any) => {
    setShowLoader(true)
    isGettingMessageData.current = true;
    if (messageNextOffset.current < 0) {
      // return;
    }
    var obj: any = {}
    obj.toId = toId
    obj.offset = messageNextOffset?.current < 0 ? 0 : messageNextOffset.current
    obj.limit = 100
    obj.keyword = chatSearch?.keyword ? chatSearch?.keyword : ""
    WebService.getAPI({
      action: `/users-message-thread`,
      body: obj
    })
      .then((res: any) => {
        reset()
        for (var i in res.list) {
          if (res.list[i].message) {
            res.list[i].doc_ext = HelperService.geturlextension(res.list[i].message)
          }
        }
        if (messageNextOffset.current <= 0) {
          setMessageList([...res.list]);
        } else {
          setMessageList([...messageList, ...res.list]);
        }
        messageNextOffset.current = res.next_offset;
        setreply('')
        setShowLoader(false)
      })
      .catch((error: any) => {
        setShowLoader(false)
      });
    isGettingMessageData.current = true;
  };

  const onSendMessage = (data: any) => {
    data.toId = Chat_Box_Toid
    data.replyMsgId = reply.id ? reply.id : ""
    setLoading(true);
    WebService.postAPI({
      action: `/save-message`,
      body: data,
    })
      .then((res: any) => {
        if (attachments && attachments.length > 0) {
          onUpload(res.id, 0)
        } else if (filesFolderData && filesFolderData.length > 0) {
          onUploadCloudFiles(res.id, 0)
        } else {
          getChatMessagesList(Chat_Box_Toid)
        }
        toast.success(res.message);
        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
      });
  }

  const onChange = (event: any) => {
    const { files } = event.target;
    var obj: any = {};
    obj.name = files[0].name;
    obj.file = files[0];
    if (files && files[0]) {
      setFile(files[0]);
      let arr = files[0].type.split('/');
      if (arr && arr[0] == 'image') {
        obj.type = "image";
      } else if (arr) {
        obj.type = "file";
      }
      attachments.push(obj);
      setAttachments([...attachments])
    };
  }

  const onUpload = (id: any, i: any) => {
    WebService.fileUploadAPI({
      action: `/save-messag-doc`,
      key: 'image',
      file: attachments[i].file,
      body: {
        id: id,
        doc_type: attachments[i].type,
        doc_name: attachments[i].name,
      },
    }).then((res: any, per?: any) => {
      console.log('sadfads', per);
      attachments.splice(i, 1)
      if (attachments && attachments.length > 0) {
        onUpload(id, 0)
      } else {
        getChatMessagesList(Chat_Box_Toid)
      }
    }).catch((error: any) => {
    });
  };

  const onclickReply = (data: any) => {
    // setIsChat(true)
    setreply(data)
  }

  const getGroupSearchList = () => {
    setShowLoader(true)
    // isGettingData.current = true;
    // if (chatNextOffset.current < 0) {
    //   return;
    // }
    WebService.getAPI({
      action: `/message/filter-group?offset=${groupNextOffset.current}&limit=10&keyword=${groupSearch.keyword}`,
    })
      .then((res: any) => {
        console.log(res);

        // setChatListCount(res.count)
        setGroupSearchList(res.list);
        // chatNextOffset.current = res.next_offset;
        setShowLoader(false)
      })
      .catch((error: any) => {
        setShowLoader(false)
      });
    isGettingData.current = false;
  };

  const getGroupList = () => {
    setShowLoader(true)
    isGettingGroupData.current = true;
    if (groupNextOffset.current < 0) {
      return;
    }
    WebService.getAPI({
      action: `/recent-group-message?offset=${groupNextOffset.current}&limit=20`,
    })
      .then((res: any) => {
        setChannelListCount(res.count)
        setGroupList([...groupList, ...res.list]);
        if (groupNextOffset.current == 0) {
          setChat_Box_GroupName(res.list[0].group_name)
          setChat_Box_Groupid(res.list[0].groupId)
          getGroupMessagesList(res.list[0].groupId)
        }
        groupNextOffset.current = res.next_offset;
        setShowLoader(false)
      })
      .catch((error: any) => {
        setShowLoader(false)
      });
    isGettingGroupData.current = false;
  };

  const getGroupMessagesList = (groupId: any) => {
    setShowLoader(true)
    isGettingGroupMessageData.current = true;
    if (groupMessageNextOffset.current < 0) {
      // return;
    }
    var obj: any = {}
    obj.groupId = groupId
    obj.offset = groupMessageNextOffset?.current < 0 ? 0 : groupMessageNextOffset.current
    obj.limit = 100
    obj.keyword = groupSearch?.keyword ? groupSearch?.keyword : ""
    // setLoading(true);
    WebService.getAPI({
      action: `/group-message-thread`,
      body: obj
    })
      .then((res: any) => {
        reset2()
        for (var i in res.list) {
          if (res.list[i].message) {
            res.list[i].doc_ext = HelperService.geturlextension(res.list[i].message)
          }
        }
        if (groupMessageNextOffset.current <= 0) {
          setGroupChannelList([...res.list]);
        } else {
          setGroupChannelList([...groupChannelList, ...res.list]);
        }
        groupMessageNextOffset.current = res.next_offset;
        setreply('')
        setShowLoader(false)
      })
      .catch((error: any) => {
        setShowLoader(false)
      });
    isGettingGroupMessageData.current = true;
  };

  const onSendGroupMessage = (data: any) => {
    data.groupId = Chat_Box_Groupid
    data.replyMsgId = reply.id ? reply.id : ""
    // data.replyUserId = 0     
    setLoading(true);
    WebService.postAPI({
      action: `/save-group-message`,
      body: data,
    })
      .then((res: any) => {

        if (attachments && attachments.length > 0) {
          onUploadGroup(res.id, 0)
        } else if (filesFolderData && filesFolderData.length > 0) {
          onUploadCloudFiles(res.id, 0)
        } else {
          getGroupMessagesList(Chat_Box_Toid)
        }


        // if (attachments && attachments.length > 0) {
        //   onUploadGroup(res.id, 0)
        // } else {
        //   getGroupMessagesList(Chat_Box_Groupid)
        // }
        toast.success(res.message);
        setLoading(false);
      })
      .catch((error: any) => {
        setLoading(false);
      });
  }

  const onChangeGroup = (event: any) => {
    const { files } = event.target;
    var obj: any = {};
    obj.name = files[0].name;
    obj.file = files[0];
    if (files && files[0]) {
      setFile(files[0]);
      let arr = files[0].type.split('/');
      if (arr && arr[0] == 'image') {
        obj.type = "image";
      } else if (arr) {
        obj.type = "file";
      }
      attachments.push(obj);
      setAttachments([...attachments])
    };
  }

  const onUploadGroup = (id: any, i: any) => {
    console.log(attachments);

    WebService.fileUploadAPI({
      action: `/save-messag-doc`,
      key: 'image',
      file: attachments[i].file,
      body: {
        id: id,
        doc_type: attachments[i].type,
        doc_name: attachments[i].name,
      },
    }).then((res: any) => {
      attachments.splice(i, 1)
      if (attachments && attachments.length > 0) {
        onUpload(id, 0)
      } else {
        getGroupMessagesList(Chat_Box_Groupid)
      }
    }).catch((error: any) => {
    });
  };

  const getContactList = (type: any) => {
    setShowLoader(true)
    if (type == 'syndicate') {
      setcol1(!col1);
      setcol3(false);
      setcol4(false);
      setcol2(false);
      setLoading(true);
    }
    if (type == 'entrepreneur') {
      setcol2(!col2);
      setcol4(false);
      setcol1(false);
      setcol3(false);
    }
    if (type == 'investor') {
      setcol3(!col3);
      setcol1(false);
      setcol4(false);
      setcol2(false);
    }
    if (type == 'thirdparty') {
      setcol4(!col4);
      setcol2(false);
      setcol3(false);
      setcol1(false);
    }

    WebService.getAPI({
      action: `/users-list-by-type-message?limit=10&user_type=${type}`,
    })
      .then((res: any) => {
        setContactData(res.list)
        setShowLoader(false)
      })
      .catch((error: any) => {
        setShowLoader(false)
      });
    isGettingGroupData.current = false;
  };

  const getUserOptions = () => {
    WebService.getAPI({
      action: `/All-user-list`,
      body: null
    })
      .then((res: any) => {
        var array: any = [];
        for (var i in res.list) {
          array.push({ id: res.list[i].id, value: res.list[i].name });
        }
        setUserOption(array);
      })
      .catch((e) => {
      })
  }

  const getCompanyOptions = () => {
    WebService.getAPI({
      action: `/All-company-list`,
      body: null
    })
      .then((res: any) => {
        var array: any = [];
        for (var i in res.list) {
          array.push({ id: res.list[i].companyId, value: res.list[i].company_name });
        }
        setCompanyOption(array);
      })
      .catch((e) => {
      })
  }

  const onSaveBroadcast = (data: any) => {
    setLoading(true);
    WebService.postAPI({
      action: `/save-broadcast-message`,
      body: data,
    })
      .then((res: any) => {
        toast.success(res.message);
      })
      .catch((e) => {
        setLoading(false);
      });
  };

  //Toggle Chat Box Menus
  const toggleSearch = () => {
    setsearch_Menu(!search_Menu);
  };

  const toggleClick = () => {

  };

  //Info details offcanvas
  const toggleInfo = () => {
    setIsInfoDetails(!isInfoDetails);
  };

  const toggleSettings = () => {
    setsettings_Menu(!settings_Menu);
  };
  useEffect(() => {
  }, [dispatch, currentRoomId]);

  const removeChatBox = () => {
    var element = document.getElementById("MobileChatBox");
    if (element) {
      element.classList.toggle("user-chat-show");
    }
  }

  const addMessage = (roomId: any, sender: any) => {
    const message = {
      id: Math.floor(Math.random() * 100),
      roomId,
      sender,
      message: curMessage,
      createdAt: new Date(),
    };
    setcurMessage("");
  };

  const scrollToBottom = useCallback(() => {
    if (messageBox) {
      messageBox.scrollTop = messageBox.scrollHeight + 1000;
    }
  }, [messageBox]);

  const onKeyPress = (e: any) => {
    const { key, value } = e;
    if (key === "Enter") {
      setcurMessage(value);
      addMessage(currentRoomId, currentUser.name);
    }
  };

  //serach recent user
  const searchUsers = () => {
    var input: any, filter: any, ul, li, a, i, txtValue;
    input = document.getElementById("search-user");
    if (input) {
      filter = input.value.toUpperCase();
    }
    // filter = input.value.toUpperCase();
    var userList = document.getElementsByClassName("users-list");
    Array.prototype.forEach.call(userList, function (el) {
      li = el.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    });
  };

  //Search Message
  const searchMessages = () => {
    var searchInput: any, searchFilter: any, searchUL: any, searchLI, a, i, txtValue;
    searchInput = document.getElementById("searchMessage");
    searchFilter = searchInput.value.toUpperCase();
    searchUL = document.getElementById("users-conversation");
    searchLI = searchUL.getElementsByTagName("li");
    Array.prototype.forEach.call(searchLI, function (search) {
      a = search.getElementsByTagName("p")[0] ? search.getElementsByTagName("p")[0] : '';
      txtValue = a.textContent || a.innerText ? a.textContent || a.innerText : '';
      if (txtValue.toUpperCase().indexOf(searchFilter) > -1) {
        search.style.display = "";
      } else {
        search.style.display = "none";
      }
    });
  };

  // Copy Message
  const handleCkick = (ele: any) => {
    var copy = ele.closest(".chat-list").querySelector('.ctext-content').innerHTML;
    navigator.clipboard.writeText(copy);
    let temp: any = document.getElementById("copyClipBoard");
    temp.style.display = "block";
    setTimeout(() => {
      temp.style.display = "none";
    }, 2000);
  };

  // emoji
  const [emojiArray, setemojiArray] = useState<any[]>([]);

  const onEmojiClick = (event: any, emojiObject: any) => {
    setemojiArray([...emojiArray, emojiObject.emoji]);
    let emoji = [...emojiArray, emojiObject.emoji].join(" ");
    setcurMessage(emoji);
  };

  const onScrollNewMessage = (e: any) => {

    let height: number = e.target.scrollHeight - e.target.scrollTop;
    if (!isGettingData.current && (height < 610)) {
      getChatList();
    }
  }

  const onScrollGroup = (e: any) => {
    console.log(e);

    let height: number = e.target.scrollHeight - e.target.scrollTop;
    if (!isGettingGroupData.current && (height < 610)) {
      getGroupList();
    }
  }

  const onScrollMessagesList = (e: any) => {
    let height: number = e.target.scrollHeight - e.target.scrollTop;
    if (!isGettingMessageData.current && (height < 250)) {
      getChatMessagesList(Chat_Box_Toid);
    }
  }

  const onScrollChannelMessagesList = (e: any) => {
    let height: number = e.target.scrollHeight - e.target.scrollTop;
    if (!isGettingMessageData.current && (height < 250)) {
      getChatMessagesList(Chat_Box_Toid);
    }
  }

  const closeAddBroadcast = () => {
    setIsShowAddBroadcast(false);
  }
  const onEditAddGroup = () => {
    setIsShowAddGroup(true)
  }

  const closeAddContacts = () => {
    setIsShowAddContacts(false);
  }
  const closeAddGroup = () => {
    setIsShowAddGroup(false);
    setChat_Box_Groupid('')
  }

  const toggleFiles = () => {
    setIsFiles(!isFiles);
  };

  const closeFileFolder = () => {
    setIsFiles(false);
  }

  const Compo = ({ higlight, value }: any) => {
    return <p >{getHighlightedText(value, higlight)}</p>;
  };

  const getHighlightedText = (text: any, higlight: any) => {
    var parts = text && text.split(new RegExp(`(${higlight})`, "gi"));
    return parts.map((part: any, index: any) => (
      <>
        {part && part.toLowerCase() == higlight && higlight.toLowerCase() ? (
          <b style={{ backgroundColor: '#37a2d6' }}>{part}</b>
        ) : (
          part
        )
        }</>
    ));
  }

  const AttachCloudFiles = (type: any) => {
    if (type == 'Attach_Cloud_Files') {
      alert(type)
      setFileType(type)
      setIsFiles(true)
    }
  }

  const setFilesData = (data: any) => {
    setFilesFolderData(data)
  }

  const onUploadCloudFiles = (id: any, i: any) => {
    setLoading(true);
    var obj: any = {};
    if (filesFolderData) {
      obj.docId = filesFolderData[i].docId ? filesFolderData[i].docId : ''
    }
    obj.id = id ? id : ''
    WebService.postAPI({
      action: `/message/attachedcloud`,
      body: obj,
    })
      .then((res: any) => {
        filesFolderData.splice(i, 1)
        if (filesFolderData && filesFolderData.length > 0) {
          onUploadCloudFiles(id, 0)
        } else {
          getChatMessagesList(Chat_Box_Toid)
        }
      })
      .catch((e) => {
        setLoading(false);
      })
  }

  const onClickFilter = () => {

  }

  const onSaveFilter = () => {

  }

  return (
    <>
      {/* <Loader show={showLoader} />  */}

      {isShowAddBroadcast && <AddBroadcast
        isShow={isShowAddBroadcast}
        title="Broadcast"
        isClose={closeAddBroadcast}
      // data={editApPaymentTermData}
      />
      }
      {isShowAddContacts && <AddContacts
        isShow={isShowAddContacts}
        title="Contacts"
        isClose={closeAddContacts}
      // data={editApPaymentTermData}
      />}
      {isShowAddGroup &&
        <AddGroup
          isShow={isShowAddGroup}
          title="Groups"
          isClose={closeAddGroup}
          groupId={Chat_Box_Groupid}
        />
      }
      {isFiles && <FilesFolder
        isShow={isFiles}
        title="Files Folder"
        isClose={closeFileFolder}
        folderType={fileType}
        filesData={setFilesData}
      // data={editApPaymentTermData}
      />}
      <React.Fragment>
        <div className="page-content-message">
          <Container fluid>
            {page &&
              <BreadCrumb title="Message" pageTitle="Message" location={"location"} />
            }
            <div className="chat-wrapper d-lg-flex gap-1 mt-n4 py-1">
              <div className="chat-leftsidebar">
                <div className="px-4 pt-4 mb-3">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <h5 className="mb-4">Message</h5>
                    </div>
                    <div className="flex-shrink-0 me-2">
                      <UncontrolledTooltip placement="bottom" target="files">
                        Files
                      </UncontrolledTooltip>
                      <Button
                        color=""
                        id="files"
                        className="btn btn-soft-primary btn-sm shadow-none"
                        // onClick={() => setIsShowAddBroadcast(true)}
                        onClick={toggleFiles}
                      >
                        <i className=" ri-folder-line align-bottom"></i>
                      </Button>
                    </div>
                    <div className="flex-shrink-0" >
                      <UncontrolledTooltip placement="bottom" target="Broadcast">
                        Broadcast
                      </UncontrolledTooltip>
                      <Button
                        color=""
                        id="Broadcast"
                        className="btn btn-soft-primary btn-sm shadow-none"
                        onClick={() => setIsShowAddBroadcast(true)}
                      >
                        <i className="ri-broadcast-line align-bottom"></i>
                      </Button>
                    </div>
                  </div>
                  {customActiveTab === "1" &&
                    <>
                      <Row>
                        <Col lg={10}>
                          <div className="search-box">
                            <Input
                              type="text"
                              id="searchId"
                              className="form-control search bg-light border-light"
                              placeholder="Search here...."
                              name="title"
                              value={chatSearch ? chatSearch.title : ""}
                              onChange={(e) => {
                                setChatSearch({ keyword: e.target.value });
                              }} />
                            <i className="ri-search-line search-icon"></i>
                          </div>
                        </Col>
                        <Col lg={2} className="mt-2">
                          <a title="Filter" onClick={e => setData({ alert: true })}>
                            <Filter className="cursor-pointer" height={20} width={20} />
                          </a>
                        </Col>
                      </Row>
                    </>
                  }
                  {customActiveTab === "2" &&
                    <>
                      <Row>
                        <Col lg={10}>
                          <div className="search-box">
                            <Input
                              type="text"
                              id="searchId"
                              className="form-control search bg-light border-light"
                              placeholder="Search here...."
                              name="title"
                              value={groupSearch ? groupSearch.title : ""}
                              onChange={(e) => {
                                setGroupSearch({ keyword: e.target.value })
                              }
                              }
                            />
                            <i className="ri-search-line search-icon"></i>
                          </div>
                        </Col>
                        <Col lg={2} className="mt-2">
                          <a title="Filter" onClick={e => setData({ alert: true })}>
                            <Filter className="cursor-pointer" height={20} width={20} />
                          </a>
                        </Col>
                      </Row>
                    </>
                  }
                </div>
                <Nav tabs className="nav nav-tabs nav-tabs-custom transparent-nav nav-dark nav-justified mb-3">
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: customActiveTab === "1",
                      })}
                      onClick={() => {
                        toggleCustom("1");
                        setGroupList([])
                      }}
                    >
                      Chats
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: customActiveTab === "2",
                      })}
                      onClick={() => {
                        toggleCustom("2");
                        getGroupList()
                      }}
                    >
                      Group
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ cursor: "pointer" }}
                      className={classnames({
                        active: customActiveTab === "3",
                      })}
                      onClick={() => {
                        toggleCustom("3");
                      }}
                    >
                      Contacts
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent
                  activeTab={customActiveTab}
                  className="text-muted"
                >
                  <TabPane tabId="1" id="chats" style={{ overflow: "hidden" }}>
                    <SimpleBar
                      className="chat-room-list pt-3"
                      style={{ margin: "-16px 0px 0px" }}
                    >
                      {!chatSearch?.keyword &&
                        <div className="d-flex align-items-center px-4 mb-2">
                          <div className="flex-grow-1">
                            <h4 className="mb-0 fs-11 text-muted text-uppercase">
                              Direct Messages <span className="text-brand ms-2"> ({chatListCount ?? "0"})</span>
                            </h4>
                          </div>
                          <div className="flex-shrink-0">
                            <UncontrolledTooltip placement="bottom" target="addnewmsg" >
                              New Message
                            </UncontrolledTooltip>

                            <button
                              type="button"
                              id="addnewmsg"
                              className="btn btn-soft-primary  btn-sm"
                              onClick={() => setIsShowAddContacts(true)}
                            >
                              <i className="ri-add-line align-bottom"></i>
                            </button>
                          </div>
                        </div>
                      }
                      {/* <InfiniteScroll 
                       dataLength={chatList.length}
                     next={getChatList}
                      hasMore={true}
                    loader={<h4>Loading...</h4>}
                    > */}
                      {chatSearch?.keyword ?
                        <div className="chat-message-list" onScroll={(e: any) => { onScrollNewMessage(e) }} style={{ maxHeight: '535px', overflowY: 'scroll' }}>

                          <ul
                            className="list-unstyled chat-list chat-user-list users-list"
                            id="userList"
                          >
                            {chatSearchList?.length > 0 && chatSearchList.map((res: any, index: any) => {
                              return (
                                <li
                                  key={res.id + res.status}
                                  className={
                                    currentRoomId === res?.roomId ? "active" : ""
                                  }
                                >
                                  <Link
                                    to="#"
                                    onClick={(e) => {
                                      userSearchChatOpen(
                                        res.id,
                                        res?.to_first_name + res?.to_last_name,
                                        res.fromId,
                                        res.to_photo,
                                        res.toId,
                                      );
                                    }}
                                  >
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                        <div className="avatar-xxs">
                                          <Loader show={showLoader} />

                                          {res?.to_photo ? (
                                            <img
                                              src={res?.to_photo}
                                              className="rounded-circle img-fluid-new userprofile"
                                              alt=""
                                              width={100}
                                            />
                                          ) : (
                                            <div
                                              className={
                                                "avatar-title rounded-circle bg-" +
                                                res?.bgColor +
                                                " userprofile"
                                              }
                                            >
                                              {res?.to_first_name.charAt(0).toUpperCase()}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      <div className="flex-grow-1 overflow-hidden">
                                        <p className="text-truncate mb-0">{res?.to_first_name + " " + " " + res?.to_last_name + " " + "(" + res?.to_user_type + ")"} <span style={{ fontSize: 9, float: "right" }}>{res.added_date ? HelperService.getDateFormate(res.added_date) : ""}</span></p>
                                        <Compo key={index} value={res.message} higlight={chatSearch?.keyword} />
                                        <small className=" text-black-50">{res.company_name}</small>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div> :
                        <div className="chat-message-list" onScroll={(e: any) => { onScrollNewMessage(e) }} style={{ maxHeight: '535px', overflowY: 'scroll' }}>
                          {showLoader == true &&
                            <div style={{ marginTop: '65%' }}>
                              <Lottie options={defaultOptions} height={50} width={50} />
                            </div>
                          }
                          <ul
                            className="list-unstyled chat-list chat-user-list users-list"
                            id="userList"
                          >
                            {chatList?.length > 0 && chatList.map((chat: any) => {
                              return (
                                <li
                                  key={chat.id + chat.status}
                                  className={
                                    currentRoomId === chat.roomId ? "active" : ""
                                  }
                                >
                                  <Link
                                    to="#"
                                    onClick={(e) => {
                                      userChatOpen(
                                        chat.id,
                                        chat?.toname,
                                        chat.status,
                                        chat.fromId,
                                        chat.to_photo,
                                        chat.toId,
                                      );
                                    }}
                                  >
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                        <div className="avatar-xxs">
                                          {chat.to_photo ? (
                                            <img
                                              src={chat.to_photo}
                                              className="rounded-circle img-fluid-new userprofile"
                                              alt=""
                                              width={100}
                                            />
                                          ) : (
                                            <div
                                              className={
                                                "avatar-title rounded-circle bg-" +
                                                chat.bgColor +
                                                " userprofile"
                                              }
                                            >
                                              {chat?.toname ? chat?.toname.charAt(0).toUpperCase() : ''}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      <div className="flex-grow-1 overflow-hidden">
                                        <p className="text-truncate mb-0">{chat?.toname ? chat?.toname + " " + "(" + chat.to_user_type + ")" : ''} </p>
                                        <small className=" text-black-50">{chat.company_name}</small>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      }
                    </SimpleBar>
                  </TabPane>
                  <TabPane tabId="2" id="Group" style={{ overflow: "hidden" }}>
                    <SimpleBar
                      className="chat-room-list pt-3"
                      style={{ margin: "-16px 0px 0px" }}
                    >
                      {/* </InfiniteScroll> */}
                      <div className="d-flex align-items-center px-4" >
                        <div className="flex-grow-1">
                          <h4 className="mb-0 fs-11 text-muted text-uppercase">
                            Groups<span className="text-brand ms-2">({channelListCount ?? "0"})</span>
                          </h4>
                        </div>
                        <div className="flex-shrink-0" >
                          <UncontrolledTooltip
                            placement="bottom"
                            target="createnewmsg"
                          >
                            Create group
                          </UncontrolledTooltip>
                          <Button
                            color=""
                            id="createnewmsg"
                            className="btn btn-soft-success btn-sm"
                            onClick={() => setIsShowAddGroup(true)}
                          >
                            <i className="ri-add-line align-bottom"></i>
                          </Button>
                        </div>
                      </div>
                      {groupSearch?.keyword ?
                        <div className="chat-message-list" onScroll={(e: any) => { onScrollNewMessage(e) }} style={{ maxHeight: '535px', overflowY: 'scroll' }}>
                          <ul
                            className="list-unstyled chat-list chat-user-list users-list"
                            id="userList"
                          >
                            {groupSearchList?.length > 0 && groupSearchList.map((res: any, index: any) => {
                              return (
                                <li
                                  key={res.id + res.status}
                                  className={
                                    currentRoomId === res?.roomId ? "active" : ""
                                  }
                                >
                                  <Link
                                    to="#"
                                    onClick={(e) => {
                                      groupChatOpen(
                                        // group.id,
                                        res.group_name,
                                        res.company_logo,
                                        res.groupId,
                                      );
                                    }}
                                  >
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                        <div className="avatar-xxs">
                                          {res?.to_photo ? (
                                            <img
                                              src={res?.to_photo}
                                              className="rounded-circle img-fluid-new userprofile"
                                              alt=""
                                              width={100}
                                            />
                                          ) : (
                                            <div
                                              className={
                                                "avatar-title rounded-circle bg-" +
                                                res?.bgColor +
                                                " userprofile"
                                              }
                                            >
                                              {res?.first_name.charAt(0).toUpperCase()}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                      <div className="flex-grow-1 overflow-hidden">
                                        <p className="text-truncate mb-0">{res?.first_name + " " + " " + res?.last_name + " " + "(" + res?.last_name + ")"} <span style={{ fontSize: 9, float: "right" }}>{res.added_date ? HelperService.getDateFormate(res.added_date) : ""}</span></p>
                                        <Compo key={index} value={res.message} higlight={groupSearch?.keyword} />
                                        <small className=" text-black-50">{res.company_name}</small>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div> :
                        <div className="chat-message-list" onScroll={(e: any) => { onScrollGroup(e) }} style={{ maxHeight: '535px', overflowY: 'scroll' }}>
                          {showLoader == true &&
                            <div style={{ marginTop: '65%' }}>
                              <Lottie options={defaultOptions} height={50} width={50} />
                            </div>
                          }
                          <ul
                            className="list-unstyled chat-list chat-user-list mb-0 users-list"
                            id="channelList">
                            {groupList?.length > 0 && groupList.map((group: any, key) => {
                              return (
                                // <React.Fragment key={key}>
                                <li>
                                  <Link to="#" className="unread-msg-user" onClick={(e) => {
                                    groupChatOpen(
                                      // group.id,
                                      group.group_name,
                                      group.company_logo,
                                      group.groupId,
                                    );
                                  }} >
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                                        <div className="avatar-xxs">
                                          {group.company_logo ? (
                                            <img
                                              src={group.company_logo}
                                              className="rounded-circle img-fluid-new userprofile"
                                              alt=""
                                              width={100}
                                            />
                                          ) : (
                                            <div
                                              className={
                                                "avatar-title rounded-circle bg-" +
                                                group.bgColor +
                                                " userprofile"
                                              }
                                            >
                                              {group.group_name.charAt(0).toUpperCase()}
                                            </div>
                                          )}
                                          {/* <div className="avatar-title bg-light rounded-circle text-body">
                      #
                    </div> */}
                                        </div>
                                      </div>
                                      <div className="flex-grow-1 overflow-hidden">
                                        <p className="text-truncate mb-0">
                                          {group.group_name}
                                        </p>
                                      </div>
                                      {group.count > 0 && (
                                        <div className="flex-shrink-0">
                                          <span className="badge badge-soft-dark rounded p-1">
                                            {group.count}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                                // </React.Fragment>
                              )
                            })}
                          </ul>
                        </div>
                      }
                    </SimpleBar>
                  </TabPane>
                  <TabPane tabId="3" id="contacts">
                    <SimpleBar className="chat-room-list pt-3" style={{ margin: "-16px 0px 0px" }}>
                      <div className="sort-contact">
                        <Accordion id="default-accordion-example" className="contacts-accordion" toggle={toggleClick} open={""}>
                          <AccordionItem>
                            <h2 className="accordion-header" id="headingOne">
                              <button
                                className={classnames("accordion-button", { collapsed: !col1 })} type="button" style={{ cursor: "pointer" }} onClick={() => getContactList('syndicate')} >
                                Network
                              </button>
                            </h2>
                            <Collapse isOpen={col1} className="accordion-collapse" id="collapseOne" >
                              <div className="accordion-body">
                                {showLoader == true &&
                                  <div style={{ marginTop: '65%' }}>
                                    <Lottie options={defaultOptions} height={50} width={50} />
                                  </div>
                                }
                                <SimpleBar>
                                  <div className="mt-3">

                                    {/* <div className="contact-list-title">{item.title}</div> */}
                                    <ul id={"contact-sort-"} className="list-unstyled contact-list">
                                      {contactData?.length > 0 && contactData.map((item: any, key) => {
                                        return (
                                          <li key={key}>
                                            <div className="d-flex align-items-center">
                                              <div className="flex-shrink-0 me-2">
                                                <div className="avatar-xxs">
                                                  {item.photo ? <img src={item.photo} className="img-fluid rounded-circle" alt="" /> :
                                                    <span className="avatar-title rounded-circle bg-primary fs-10">
                                                      {item?.name && item.name.charAt(0) + item.name.split(" ").slice(-1).toString().charAt(0).toUpperCase()}
                                                    </span>}
                                                </div>
                                              </div>
                                              <div className="flex-grow-1" onClick={(e) => {
                                                userNetworkChatOpen(
                                                  item.userId,
                                                  item.name,
                                                );
                                              }}>
                                                <p className="text-truncate contactlist-name mb-0">{item.name}</p>
                                              </div>
                                              <div className="flex-shrink-0">
                                                {/* <UncontrolledDropdown>
                                            <DropdownToggle tag="a" className="text-muted">
                                              <i className="ri-more-2-fill" />
                                            </DropdownToggle>
                                            <DropdownMenu className="dropdown-menu-end">
                                              <DropdownItem><i className="ri-pencil-line text-muted me-2 align-bottom" />Edit</DropdownItem>
                                              <DropdownItem><i className="ri-forbid-2-line text-muted me-2 align-bottom" />Block</DropdownItem>
                                              <DropdownItem><i className="ri-delete-bin-6-line text-muted me-2 align-bottom" /> Remove</DropdownItem>
                                            </DropdownMenu>
                                          </UncontrolledDropdown> */}
                                              </div>
                                            </div>
                                          </li>
                                        )
                                      })}
                                    </ul>
                                  </div>
                                </SimpleBar>
                              </div>
                            </Collapse>
                          </AccordionItem>
                          <AccordionItem>
                            <h2 className="accordion-header" id="headingTwo">
                              <button
                                className={classnames("accordion-button", { collapsed: !col2 })} type="button" onClick={() => getContactList('entrepreneur')} style={{ cursor: "pointer" }} >
                                Startup
                              </button>
                            </h2>
                            <Collapse isOpen={col2} className="accordion-collapse" >
                              <div className="accordion-body">
                                {showLoader == true &&
                                  <div style={{ marginTop: '65%' }}>
                                    <Lottie options={defaultOptions} height={50} width={50} />
                                  </div>
                                }
                                <div className="mt-2">
                                  <ul id={"contact-sort-"} className="list-unstyled contact-list mb-0">
                                    {contactData?.length > 0 && contactData.map((item: any, key) => {
                                      return (
                                        <li style={{ cursor: "default" }} key={key}>
                                          <div className="d-flex align-items-start">
                                            <div className="flex-shrink-0 me-2">
                                              <div className="avatar-xxs">
                                                {item.photo ? <img src={item.photo} className="img-fluid rounded-circle" alt="" /> :
                                                  <span className="avatar-title rounded-circle bg-primary fs-10">
                                                    {item?.company_name && item?.company_name.charAt(0) + item?.company_name.split(" ").slice(-1).toString().charAt(0).toUpperCase()}
                                                  </span>}
                                              </div>
                                            </div>
                                            <div className="flex-grow-1" onClick={(e) => {
                                              userNetworkChatOpen(
                                                item.userId,
                                                item.name,
                                              );
                                            }}>
                                              <p className="text-truncate contactlist-name mb-0">{item?.company_name}</p>
                                              {/* <p className="small text-black-50 mb-0">Brand Name</p> */}
                                            </div>
                                            {/* <div className="flex-shrink-0">
                                            <a href="javascript:void(0)" className="me-2 fs-5 text-black-50">
                                              <span className=" "><i className="ri-message-line"></i></span>
                                            </a>
                                            <Link to="" target="_blank" className=" text-black-50">
                                              <span className=" "><i className="ri-arrow-right-line fs-5"></i></span>
                                            </Link>
                                          </div> */}
                                          </div>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </Collapse>
                          </AccordionItem>
                          <AccordionItem>
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className={classnames("accordion-button", { collapsed: !col3 })} type="button" onClick={() => getContactList('investor')} style={{ cursor: "pointer" }} >
                                Angels
                              </button>
                            </h2>
                            <Collapse isOpen={col3} className="accordion-collapse" >
                              <div className="accordion-body">
                                {showLoader == true &&
                                  <div style={{ marginTop: '65%' }}>
                                    <Lottie options={defaultOptions} height={50} width={50} />
                                  </div>
                                }
                                <div className="mt-2" >
                                  <ul id={"contact-sort-"} className="list-unstyled contact-list mb-0">
                                    {contactData?.length > 0 && contactData.map((item: any, key) => {
                                      return (
                                        <li key={key}>
                                          <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-2">
                                              <div className="avatar-xxs">
                                                {item.photo ? <img src={item.photo} className="img-fluid rounded-circle" alt="" /> :
                                                  <span className="avatar-title rounded-circle bg-primary fs-10">
                                                    {item?.name && item.name.charAt(0) + item.name.split(" ").slice(-1).toString().charAt(0)}
                                                  </span>}
                                              </div>
                                            </div>
                                            <div className="flex-grow-1" onClick={(e) => {
                                              userNetworkChatOpen(
                                                item.userId,
                                                item.name,
                                              );
                                            }}>
                                              <p className="text-truncate contactlist-name mb-0">{item.name}</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                              {/* <UncontrolledDropdown>
                                              <DropdownToggle tag="a" className="text-muted">
                                                <i className="ri-more-2-fill" />
                                              </DropdownToggle>
                                              <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem><i className="ri-pencil-line text-muted me-2 align-bottom" />Edit</DropdownItem>
                                                <DropdownItem><i className="ri-forbid-2-line text-muted me-2 align-bottom" />Block</DropdownItem>
                                                <DropdownItem><i className="ri-delete-bin-6-line text-muted me-2 align-bottom" /> Remove</DropdownItem>
                                              </DropdownMenu>
                                            </UncontrolledDropdown> */}
                                            </div>
                                          </div>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </Collapse>
                          </AccordionItem>
                          <AccordionItem>
                            <h2 className="accordion-header" id="headingThree">
                              <button
                                className={classnames("accordion-button", { collapsed: !col4 })} type="button" onClick={() => getContactList('thirdparty')} style={{ cursor: "pointer" }} >
                                Advisors
                              </button>
                            </h2>
                            <Collapse isOpen={col4} className="accordion-collapse" >
                              <div className="accordion-body">
                                {showLoader == true &&
                                  <div style={{ marginTop: '65%' }}>
                                    <Lottie options={defaultOptions} height={50} width={50} />
                                  </div>
                                }
                                <div className="mt-2">
                                  <ul id={"contact-sort-"} className="list-unstyled contact-list mb-0">
                                    {contactData?.length > 0 && contactData.map((item: any, key) => {
                                      return (
                                        <li key={key}>
                                          <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0 me-2">
                                              <div className="avatar-xxs">
                                                {item.photo ? <img src={item.photo} className="img-fluid rounded-circle" alt="" /> :
                                                  <span className="avatar-title rounded-circle bg-primary fs-10">
                                                    {item?.name && item.name.charAt(0) + item.name.split(" ").slice(-1).toString().charAt(0)}
                                                  </span>}
                                              </div>
                                            </div>
                                            <div className="flex-grow-1" onClick={(e) => {
                                              userNetworkChatOpen(
                                                item.userId,
                                                item.name,
                                              );
                                            }}>
                                              <p className="text-truncate contactlist-name mb-0">{item.name}</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                              {/* <UncontrolledDropdown>
                                              <DropdownToggle tag="a" className="text-muted">
                                                <i className="ri-more-2-fill" />
                                              </DropdownToggle>
                                              <DropdownMenu className="dropdown-menu-end">
                                                <DropdownItem><i className="ri-pencil-line text-muted me-2 align-bottom" />Edit</DropdownItem>
                                                <DropdownItem><i className="ri-forbid-2-line text-muted me-2 align-bottom" />Block</DropdownItem>
                                                <DropdownItem><i className="ri-delete-bin-6-line text-muted me-2 align-bottom" /> Remove</DropdownItem>
                                              </DropdownMenu>
                                            </UncontrolledDropdown> */}
                                            </div>
                                          </div>
                                        </li>)
                                    })}
                                  </ul>
                                </div>
                              </div>
                            </Collapse>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </SimpleBar>
                  </TabPane>
                </TabContent>
              </div>
              {customActiveTab == '1' ?
                <div className="user-chat w-100 overflow-hidden" id="MobileChatBox">
                  <div className="chat-content d-lg-flex">
                    <div className="w-100 overflow-hidden position-relative" >
                      <div className="position-relative">
                        <div className="p-3 user-chat-topbar">
                          <Row className="align-items-center">
                            <Col sm={4} xs={8}>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 d-block d-lg-none me-3">
                                  <Link
                                    to="#"
                                    className="user-chat-remove fs-18 p-1"
                                    id="removeChatbox"
                                    onClick={removeChatBox}
                                  >
                                    <i className="ri-arrow-left-s-line align-bottom"></i>
                                  </Link>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 chat-user-img online user-own-img   me-3 ms-0">
                                      {Chat_Box_Image === undefined ? (
                                        <img
                                          src={userDummayImage}
                                          className="rounded-circle avatar-xs"
                                          alt=""
                                        />
                                      ) : (
                                        <img
                                          src={Chat_Box_Image}
                                          className="rounded-circle avatar-xs"
                                          alt=""
                                        />
                                      )}
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                      <h5 className="text-truncate mb-0 fs-16">
                                        <a
                                          className="text-reset username"
                                          data-bs-toggle="offcanvas"
                                          href="#userProfileCanvasExample"
                                          aria-controls="userProfileCanvasExample"
                                        >
                                          {Chat_Box_Username}
                                        </a>
                                      </h5>
                                      <p className="text-truncate text-muted fs-14 mb-0 userStatus">
                                        {/* <small>Posco</small> */}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col sm={8} xs={4}>
                              <ul className="list-inline user-chat-nav text-end mb-0">
                                <li className="list-inline-item m-0">
                                  <Dropdown
                                    isOpen={search_Menu}
                                    toggle={toggleSearch}
                                  >
                                    <DropdownToggle
                                      className="btn btn-ghost-secondary btn-icon"
                                      tag="button"
                                    >
                                      {/* <FeatherIcon
                                    icon="search"
                                    className="icon-sm"
                                  /> */}
                                      {/* <img src={SearchIcon}/> */}
                                      <Search />
                                    </DropdownToggle>
                                    <DropdownMenu className="p-0 dropdown-menu-end dropdown-menu-lg">
                                      <div className="p-2">
                                        <div className="search-box">
                                          <Input
                                            onKeyUp={searchMessages}
                                            type="text"
                                            className="form-control bg-light border-light"
                                            placeholder="Search here..."
                                            id="searchMessage"
                                            value={formData ? formData.title : ""}
                                            onChange={(e) => setFormData({ keyword: e.target.value })}
                                          />
                                          <i className="ri-search-2-line search-icon"></i>
                                        </div>
                                      </div>
                                    </DropdownMenu>
                                  </Dropdown>
                                </li>
                                <li className="list-inline-item d-none d-lg-inline-block m-0">
                                  <button
                                    type="button"
                                    className="btn btn-ghost-secondary btn-icon"
                                    onClick={toggleInfo}
                                  >
                                    {/* <FeatherIcon icon="info" className="icon-sm" /> */}
                                    <InfoCircle />
                                  </button>
                                </li>
                                {
                                  groupList?.length > 0 &&

                                  <li className="list-inline-item d-none d-lg-inline-block m-0" onClick={() => onEditAddGroup()}>
                                    <button
                                      type="button"
                                      className="btn btn-ghost-secondary btn-icon"

                                    >
                                      {/* <FeatherIcon icon="edit" className="icon-sm" /> */}
                                      <PencilSquare />
                                    </button>
                                  </li>
                                }

                                {/* <li className="list-inline-item m-0">
                              <Dropdown
                                isOpen={settings_Menu}
                                toggle={toggleSettings}
                              >
                                <DropdownToggle
                                  className="btn btn-ghost-secondary btn-icon"
                                  tag="button"
                                >
                                  <FeatherIcon
                                    icon="more-vertical"
                                    className="icon-sm"
                                  />
                                </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem
                                    href="#"
                                    className="d-block d-lg-none user-profile-show"
                                  >
                                    <i className="ri-user-2-fill align-bottom text-muted me-2"></i>{" "}
                                    View Profile
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    <i className="ri-inbox-archive-line align-bottom text-muted me-2"></i>{" "}
                                    Archive
                                  </DropdownItem>

                                  <DropdownItem href="#">
                                    {" "}
                                    <i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i>{" "}
                                    Delete
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </li> */}
                              </ul>
                            </Col>
                          </Row>
                        </div>
                        {/* Chat detail list  */}
                        <div className="position-relative" id="users-chat" onScroll={(e: any) => { onScrollMessagesList(e) }} style={{ overflowY: 'scroll' }}>
                          {showLoader == true &&
                            <div>
                              <Lottie options={defaultOptions} height={50} width={50} />
                            </div>
                          }
                          <PerfectScrollbar
                            className="chat-conversation p-3 p-lg-4"
                            id="chat-conversation"
                            containerRef={ref => setMessageBox(ref)} >
                            <div id="elmLoader"></div>
                            <ul
                              className="list-unstyled chat-conversation-list"
                              id="users-conversation"
                            >
                              {messageList?.length > 0 && messageList.map((message: any, key: any) => {
                                return (
                                  <li
                                    className={
                                      message.fromId == localdata.userId
                                        ? " chat-list right"
                                        : "chat-list left"
                                    }
                                    key={key}
                                  >
                                    <div className="conversation-list">
                                      {message.fromId != localdata.userId && (
                                        <div className="chat-avatar">
                                          {message.fromId == localdata.userId ?
                                            <img
                                              src={userDummayImage}
                                              alt=""
                                            />
                                            :
                                            <img
                                              src={Chat_Box_Image}
                                              alt=""
                                            />
                                          }
                                        </div>
                                      )}
                                      <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                          <div className="ctext-wrap-content">
                                            {message.replyMsgId ?
                                              <div className="replay-user">
                                                <div className="inner-replay-box">
                                                  <div>{message.name}  {message.syndicateId != message.fromId && message.syndicateId > 0 ? '(' + message.sname
                                                    + ')' : ''}</div>
                                                  <div dangerouslySetInnerHTML={{ __html: message.subject }} ></div>
                                                  <div dangerouslySetInnerHTML={{ __html: message.reply_message }}></div>
                                                </div>
                                                <div>{message.message} <span className="float-end">{HelperService.getFormatedTime(message.added_date)}</span></div>
                                              </div> : ""
                                            }
                                            {
                                              message.type == 'text' ? <p className="mb-0 ctext-content">
                                                {!message.replyMsgId ? <div dangerouslySetInnerHTML={{ __html: message.message }} /> : ""}

                                              </p> :

                                                (message.doc_ext == 'jpg' || message.doc_ext == 'jpeg' || message.doc_ext == 'png') ?
                                                  <img src={message.message} width={100} /> :

                                                  message.doc_ext == 'pdf' ? <div className="cursor-pointer">
                                                    <a title={message.message} onClick={() => message.message ? window.open(message.message) : ''} >
                                                      <img src={PdfIcon} className="image" width={30} />
                                                    </a>
                                                    <div>
                                                      {message.doc_name}
                                                    </div>
                                                  </div> :
                                                    message.doc_ext == 'doc' ? <div className="cursor-pointer">
                                                      <a title={message.message} onClick={() => message.message ? window.open(message.message) : ''} >
                                                        <img src={DocIcon} className="image" />
                                                      </a>
                                                      <div>
                                                        {message.doc_name}
                                                      </div>  </div> :
                                                      message.doc_ext == 'pptx' ? <div className="cursor-pointer">
                                                        <a title={message.message} onClick={() => message.message ? window.open(message.message) : ''} >
                                                          <img src={PptIcon
                                                          } className="image" />
                                                        </a>
                                                        <div>
                                                          {message.doc_name}
                                                        </div>  </div> :
                                                        message.doc_ext == 'csv' ? <div className="cursor-pointer">
                                                          <a title={message.message} onClick={() => message.message ? window.open(message.message) : ''} >
                                                            <img src={CsvIcon
                                                            } className="image" />
                                                          </a>
                                                          <div>
                                                            {message.doc_name}
                                                          </div>  </div> :
                                                          message.doc_ext == 'xlsx' ? <div className="cursor-pointer">
                                                            <a title={message.message} onClick={() => message.message ? window.open(message.message) : ''} >
                                                              <img src={XlsIcon
                                                              } className="image" />
                                                            </a>
                                                            <div>
                                                              {message.doc_name}
                                                            </div>  </div> :

                                                            <a title={message.message} onClick={() => message.message ? window.open(message.message) : ''} >
                                                              <Download className="" height={30} width={30} />
                                                            </a>
                                            }
                                            <div>
                                              <span className="reply-message fs-16" onClick={() => onclickReply(message)} style={{ cursor: "pointer", }}>
                                                <i className="ri-reply-fill me-2 text-muted align-bottom"></i>
                                              </span>
                                              <span style={{ cursor: "pointer", }} className="fs-16">
                                                <i className="ri-share-forward-fill text-muted align-bottom"></i>
                                              </span>
                                            </div>
                                          </div>
                                          <UncontrolledDropdown className="align-self-start message-box-drop">
                                            <DropdownToggle
                                              href="#"
                                              className="btn nav-btn"
                                              tag="a"
                                            >
                                              <i className="ri-more-2-fill"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                              {/*<DropdownItem href="#" className="reply-message" onClick={() => setreply(message)}>
                                                <i className="ri-reply-line me-2 text-muted align-bottom"></i>
                                                Reply
                                              </DropdownItem>
                                              <DropdownItem href="#">
                                                <i className="ri-share-line me-2 text-muted align-bottom"></i>
                                                Forward
                                              </DropdownItem>*/}
                                              <DropdownItem href="#" onClick={(e) => handleCkick(e.target)}>
                                                <i className="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                Copy
                                              </DropdownItem>
                                              <DropdownItem href="#" onClick={() => console.log()}>
                                                <i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                Delete
                                              </DropdownItem>
                                            </DropdownMenu>
                                          </UncontrolledDropdown>
                                        </div>
                                        <div className="conversation-name">
                                          <small className="text-muted time">
                                            {message.added_date ? HelperService.getUpdatedFormatedTimeWithSlash(message.added_date) : ''}
                                          </small>{" "}
                                          <span className="text-success check-message-icon">
                                            <i className="ri-check-double-line align-bottom"></i>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                )
                              })}
                            </ul>
                          </PerfectScrollbar>
                          <div
                            className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show "
                            id="copyClipBoard"
                            role="alert"
                          >
                            Message copied
                          </div>
                        </div>
                        <div >
                          {showEmoji && showEmoji ? (
                            <div className="emoji-box-open ">
                              <Picker
                                data={Emojidata ? Emojidata : {}}
                                categories={["frequent", "people", "nature", "foods", "activity", "places", "objects", "symbols", "flags"]}
                                onEmojiSelect={(e: any) => {
                                  let val: any = `${watchAllFields.message
                                    ? watchAllFields.message
                                    : ""
                                    }`;
                                  val = cursor
                                    ? val.slice(0, cursor) +
                                    e.native +
                                    val.slice(cursor, val.length)
                                    : val + " " + e.native;
                                  if (val.length < 100) {
                                    setValue("message", val.toString());
                                    cursor &&
                                      setCursor(
                                        cursor + e.native.length
                                      );
                                  }
                                }}
                                onClickOutside={() => {
                                  !isClickEmoji
                                    ? setEmoji(false)
                                    : setEmojiClick(false);
                                }}
                              />
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="chat-input-section p-3 p-lg-4">
                          <form id="chatinput-form" onSubmit={handleSubmit(onSendMessage)}>
                            <Row className="g-0 align-items-center">
                              <Col lg={11}>
                                <div className="chat-input-feedback">
                                  Please Enter a Message
                                </div>
                                <div className=" ">
                                  <input
                                    type="text"
                                    // onKeyPress={onKeyPress}
                                    // onChange={e => setcurMessage(e.target.value)}
                                    className="form-control bg-light border-0 mb-2"
                                    id="chat-input"
                                    placeholder="Subject"
                                    {...register("subject", { required: true, })}
                                  />
                                  <div>
                                    {errors.subject && (
                                      <span className="text-danger fs-12"> Please Enter Subject</span>
                                    )}
                                  </div>
                                  <input
                                    type="text"
                                    // onChange={e => setcurMessage(e.target.value)}
                                    className="form-control chat-input bg-light border-light"
                                    id="chat-input"
                                    placeholder="Type your message..."
                                    onKeyPress={(e: any) => {
                                      e?.target &&
                                        setCursor(e.target.selectionStart)

                                      // onKeyPress()
                                    }
                                    }
                                    {...register("message", { required: true, })}
                                  />
                                  <div className="emoji-chat">
                                    <a title="Emoji" onClick={() => {
                                      setEmojiClick(true);
                                      setEmoji(!showEmoji);

                                    }}>
                                      <EmojiSmile className="cursor-pointer" height={20} width={20} />
                                    </a>
                                  </div>
                                  <div>
                                    {errors.message && (
                                      <span className="text-danger fs-12"> Please Enter Message</span>
                                    )}
                                  </div>
                                </div>
                              </Col>
                              <Col lg={1}>
                                <div className="chat-input-links ms-2">
                                  <div className="links-list-item">
                                    <Button
                                      type="submit"
                                      color="success"
                                      // onClick={() => { onSendMessage(); }}
                                      // onClick={() => { addMessage(currentRoomId, currentUser.name); setemojiPicker(false); setemojiArray([]); }}
                                      className="chat-send waves-effect waves-light"
                                    >
                                      <i className="ri-send-plane-2-fill align-bottom"></i>
                                    </Button>
                                  </div>
                                </div>
                                <div
                                  className="nav-item dropdown mt-2  links-list-item ">
                                  <Button
                                    type="button"
                                    color="warning"
                                    className="chat-send waves-effect waves-light pl-1"
                                  >
                                    <i className='ri ri-attachment-line icon' />
                                  </Button>
                                  <div className="dropdown-content">
                                    <a className="cursor-pointer" onClick={() => AttachCloudFiles("Attach_Cloud_Files")}>Attach cloud files</a>
                                    <a href="#" className=" cursor-pointer">
                                      <div className="attachment-btn">
                                        <input
                                          id="upload_device"
                                          type="file"
                                          className='input'
                                          onChange={(e: any) => {
                                            onChange(e)
                                          }
                                          }
                                        />
                                        <label htmlFor="upload_device">  Upload from the device </label>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              {attachments &&
                                attachments?.length > 0 &&
                                attachments.map(
                                  (res: any, index: any) => {
                                    return (
                                      <Col lg={3} className=" text-black-50 box-new">
                                        {res.name} <i className="bx bx-x align-middle me-2 cross-icon"></i>
                                      </Col>
                                    )
                                  })}
                              {filesFolderData &&
                                filesFolderData?.length > 0 &&
                                filesFolderData.map(
                                  (res: any, index: any) => {
                                    return (
                                      <Col lg={3} className=" text-black-50 box-new">
                                        {res.doc_title} <i className="bx bx-x align-middle me-2 cross-icon"></i>
                                      </Col>
                                    )
                                  })}
                            </Row>
                          </form>
                        </div>
                        <div className={reply ? "replyCard show" : "replyCard"}>
                          <Card className="mb-0">
                            <CardBody className="py-3">
                              <div className="replymessage-block mb-0 d-flex align-items-start">
                                <div className="flex-grow-1">
                                  <h5 className="conversation-name">{reply && reply.sender}</h5>
                                  <p className="mb-0 float-start">{reply && reply.message}</p>
                                  <img
                                    src={avatar1}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="float-end"
                                    style={{ borderRadius: "3px", }}
                                  />
                                </div>
                                <div className="flex-shrink-0">
                                  <button
                                    type="button"
                                    id="close_toggle"
                                    className="btn btn-sm btn-link mt-n2 me-n3 fs-18"
                                    onClick={() => setreply("")}
                                  >
                                    <i className="bx bx-x align-middle me-2"></i>
                                  </button>
                                </div>
                              </div>
                              {/*  */}
                              {/* <div className="attached-data mb-0 d-flex align-items-start">
                                <img
                                  src={avatar1}
                                  alt=""
                                  width={50}
                                  height={50}
                                  style={{ borderRadius: "3px", }}
                                />
                                <input type="text" className="form-control bg-light border-0 mb-0" id="" placeholder="Enter message" name="" style={{ height: "50px", }} />
                              </div> */}
                              {/*  */}
                              {/* <div className="replay-user">
                                <div className="inner-replay-box">
                                  <div>Smriti Misra @SS</div>
                                  <div>Hi Team</div>
                                  <div>Testing</div>
                                </div>
                                <div>Yes <span className="float-end">09:47 AM</span></div>
                              </div> */}
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div className="user-chat w-100 overflow-hidden" id="MobileGroupChatBox">
                  <div className="chat-content d-lg-flex">
                    <div className="w-100 overflow-hidden position-relative" >
                      <div className="position-relative">
                        <div className="p-3 user-chat-topbar">
                          <Row className="align-items-center">
                            <Col sm={4} xs={8}>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 d-block d-lg-none me-3">
                                  <Link
                                    to="#"
                                    className="user-chat-remove fs-18 p-1"
                                    id="removeChatbox"
                                    onClick={removeChatBox}
                                  >
                                    <i className="ri-arrow-left-s-line align-bottom"></i>
                                  </Link>
                                </div>
                                <div className="flex-grow-1 overflow-hidden">
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 chat-user-img online user-own-img   me-3 ms-0">
                                      {Chat_Box_Image === undefined ? (
                                        <img
                                          src={userDummayImage}
                                          className="rounded-circle avatar-xs"
                                          alt=""
                                        />
                                      ) : (
                                        <img
                                          src={Chat_Box_GroupImage}
                                          className="rounded-circle avatar-xs"
                                          alt=""
                                        />
                                      )}
                                    </div>
                                    <div className="flex-grow-1 overflow-hidden">
                                      <h5 className="text-truncate mb-0 fs-16">
                                        <a
                                          className="text-reset username"
                                          data-bs-toggle="offcanvas"
                                          href="#userProfileCanvasExample"
                                          aria-controls="userProfileCanvasExample"
                                        >
                                          {Chat_Box_GroupName}
                                        </a>
                                      </h5>
                                      <p className="text-truncate text-muted fs-14 mb-0 userStatus">
                                        {/* <small>Posco</small> */}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col sm={8} xs={4}>
                              <ul className="list-inline user-chat-nav text-end mb-0">
                                <li className="list-inline-item m-0">
                                  <Dropdown
                                    isOpen={search_Menu}
                                    toggle={toggleSearch}
                                  >
                                    <DropdownToggle
                                      className="btn btn-ghost-secondary btn-icon"
                                      tag="button"
                                    >
                                      {/* <FeatherIcon
                                  icon="search"
                                  className="icon-sm"
                                /> */}
                                      {/* <img src={SearchIcon}/> */}
                                      <Search />
                                    </DropdownToggle>
                                    <DropdownMenu className="p-0 dropdown-menu-end dropdown-menu-lg">
                                      <div className="p-2">
                                        <div className="search-box">
                                          <Input
                                            onKeyUp={searchMessages}
                                            type="text"
                                            className="form-control bg-light border-light"
                                            placeholder="Search here..."
                                            id="searchMessage"
                                          />
                                          <i className="ri-search-2-line search-icon"></i>
                                        </div>
                                      </div>
                                    </DropdownMenu>
                                  </Dropdown>
                                </li>
                                <li className="list-inline-item d-none d-lg-inline-block m-0">
                                  <button
                                    type="button"
                                    className="btn btn-ghost-secondary btn-icon"
                                    onClick={toggleInfo}
                                  >
                                    {/* <FeatherIcon icon="info" className="icon-sm" /> */}
                                    <InfoCircle />
                                  </button>
                                </li>
                                <li className="list-inline-item d-none d-lg-inline-block m-0">
                                  <button
                                    type="button"
                                    className="btn btn-ghost-secondary btn-icon"
                                    onClick={toggleEditGroup}
                                  >
                                    {/* <FeatherIcon icon="edit" className="icon-sm" /> */}
                                    <PencilSquare />
                                  </button>
                                </li>

                                {/* <li className="list-inline-item m-0">
                            <Dropdown
                              isOpen={settings_Menu}
                              toggle={toggleSettings}
                            >
                              <DropdownToggle
                                className="btn btn-ghost-secondary btn-icon"
                                tag="button"
                              >
                                <FeatherIcon
                                  icon="more-vertical"
                                  className="icon-sm"
                                />
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem
                                  href="#"
                                  className="d-block d-lg-none user-profile-show"
                                >
                                  <i className="ri-user-2-fill align-bottom text-muted me-2"></i>{" "}
                                  View Profile
                                </DropdownItem>
                                <DropdownItem href="#">
                                  <i className="ri-inbox-archive-line align-bottom text-muted me-2"></i>{" "}
                                  Archive
                                </DropdownItem>

                                <DropdownItem href="#">
                                  {" "}
                                  <i className="ri-delete-bin-5-line align-bottom text-muted me-2"></i>{" "}
                                  Delete
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </li> */}
                              </ul>
                            </Col>
                          </Row>
                        </div>
                        <div className="position-relative" id="users-chat" onScroll={(e: any) => { onScrollChannelMessagesList(e) }} style={{ overflowY: 'scroll' }}>
                          {showLoader == true &&
                            <div >
                              <Lottie options={defaultOptions} height={50} width={50} />
                            </div>
                          }
                          <PerfectScrollbar
                            className="chat-conversation p-3 p-lg-4"
                            id="chat-conversation"
                            containerRef={ref => setMessageBox(ref)} >
                            <div id="elmLoader"></div>
                            <ul
                              className="list-unstyled chat-conversation-list"
                              id="users-conversation"
                            >
                              {groupChannelList?.length > 0 && groupChannelList.map((channelMessage: any, key: any) => {
                                return (
                                  <li
                                    className={
                                      channelMessage.fromId == localdata.userId
                                        ? " chat-list right"
                                        : "chat-list left"
                                    }
                                    key={key}
                                  >
                                    <div className="conversation-list">
                                      {channelMessage.fromId != localdata.userId && (
                                        <div className="chat-avatar">
                                          {channelMessage.fromId == localdata.userId ?
                                            <img
                                              src={userDummayImage}
                                              alt=""
                                            />
                                            :
                                            <img
                                              src={channelMessage.photo}
                                              alt=""
                                            />
                                          }
                                        </div>
                                      )}
                                      <div className="user-chat-content">
                                        <div className="ctext-wrap">
                                          <div className="ctext-wrap-content">
                                            {channelMessage.replyMsgId ?
                                              <div className="replay-user">
                                                <div className="inner-replay-box">
                                                  <div>{channelMessage.name}  {channelMessage.syndicateId != channelMessage.fromId && channelMessage.syndicateId > 0 ? '(' + channelMessage.sname
                                                    + ')' : ''}</div>
                                                  <div dangerouslySetInnerHTML={{ __html: channelMessage.subject }} ></div>
                                                  <div dangerouslySetInnerHTML={{ __html: channelMessage.reply_message }}></div>
                                                </div>
                                                <div>{channelMessage.message} <span className="float-end">{HelperService.getFormatedTime(channelMessage.added_date)}</span></div>
                                              </div> : ""
                                            }
                                            {
                                              channelMessage.type == 'text' ? <p className="mb-0 ctext-content">
                                                {!channelMessage.replyMsgId ? <div dangerouslySetInnerHTML={{ __html: channelMessage.message }} /> : ""}

                                              </p> :

                                                (channelMessage.doc_ext == 'jpg' || channelMessage.doc_type == 'jpeg' || channelMessage.doc_type == 'png') ?
                                                  <img src={channelMessage.message} className="image" width={100} /> :

                                                  channelMessage.doc_ext == 'pdf' ? <div className="cursor-pointer">
                                                    <a title={channelMessage.message} onClick={() => channelMessage.message ? window.open(channelMessage.message) : ''} >
                                                      <img src={PdfIcon} className="image" width={30} />
                                                    </a>
                                                    <div>
                                                      {channelMessage.doc_name}
                                                    </div>
                                                  </div> :
                                                    channelMessage.doc_ext == 'msword' ? <div className="cursor-pointer">
                                                      <a title={channelMessage.message} onClick={() => channelMessage.message ? window.open(channelMessage.message) : ''} >
                                                        <img src={DocIcon} className="image" width={30} />
                                                      </a>
                                                      <div>
                                                        {channelMessage.doc_name}
                                                      </div>  </div> :
                                                      channelMessage.doc_ext == 'ppt' ? <div className="cursor-pointer">
                                                        <a title={channelMessage.message} onClick={() => channelMessage.message ? window.open(channelMessage.message) : ''} >
                                                          <img src={PptIcon
                                                          } className="image" width={30} />
                                                        </a>
                                                        <div>
                                                          {channelMessage.doc_name}
                                                        </div>  </div> :
                                                        channelMessage.doc_ext == 'csv' ? <div className="cursor-pointer">
                                                          <a title={channelMessage.message} onClick={() => channelMessage.message ? window.open(channelMessage.message) : ''} >
                                                            <img src={CsvIcon
                                                            } className="image" width={30} />
                                                          </a>
                                                          <div>
                                                            {channelMessage.doc_name}
                                                          </div>  </div> :
                                                          channelMessage.doc_ext == 'xls' ? <div className="cursor-pointer">
                                                            <a title={channelMessage.message} onClick={() => channelMessage.message ? window.open(channelMessage.message) : ''} >
                                                              <img src={XlsIcon
                                                              } className="image" width={30} />
                                                            </a>
                                                            <div>
                                                              {channelMessage.doc_name}
                                                            </div>  </div> :

                                                            <a title={channelMessage.message} onClick={() => channelMessage.message ? window.open(channelMessage.message) : ''} >
                                                              <Download className="" height={30} width={30} />
                                                            </a>
                                            }
                                            <div>
                                              <span className="reply-message fs-16" onClick={() => onclickReply(channelMessage)} style={{ cursor: "pointer", }}>
                                                <i className="ri-reply-fill me-2 text-muted align-bottom"></i>
                                              </span>

                                              <span style={{ cursor: "pointer", }} className="fs-16">
                                                <i className="ri-share-forward-fill text-muted align-bottom"></i>
                                              </span>
                                            </div>
                                          </div>
                                          <UncontrolledDropdown className="align-self-start message-box-drop">
                                            <DropdownToggle
                                              href="#"
                                              className="btn nav-btn"
                                              tag="a"
                                            >
                                              <i className="ri-more-2-fill"></i>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                              <DropdownItem href="#" className="reply-message" onClick={() => setreply(channelMessage)}>
                                                <i className="ri-reply-line me-2 text-muted align-bottom"></i>
                                                Reply
                                              </DropdownItem>
                                              <DropdownItem href="#">
                                                <i className="ri-share-line me-2 text-muted align-bottom"></i>
                                                Forward
                                              </DropdownItem>
                                              <DropdownItem href="#" onClick={(e) => handleCkick(e.target)}>
                                                <i className="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                                Copy
                                              </DropdownItem>
                                              <DropdownItem href="#" onClick={() => console.log()}>
                                                <i className="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                                Delete
                                              </DropdownItem>
                                            </DropdownMenu>
                                          </UncontrolledDropdown>
                                        </div>
                                      </div>
                                      <div className="conversation-name">
                                        <small className="text-muted time">
                                          {channelMessage.added_date ? HelperService.getUpdatedFormatedTimeWithSlash(channelMessage.added_date) : ''}
                                        </small>{" "}
                                        <span className="text-success check-message-icon">
                                          <i className="ri-check-double-line align-bottom"></i>
                                        </span>
                                      </div>
                                    </div>

                                  </li>
                                )
                              })}
                            </ul>
                          </PerfectScrollbar>
                          <div
                            className="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show "
                            id="copyClipBoard"
                            role="alert"
                          >
                            Message copied
                          </div>
                          <div>
                            {showGroupEmoji ? (
                              <div className="emoji-box-open ">
                                <Picker
                                  data={Emojidata ? Emojidata : {}}
                                  categories={["frequent", "people", "nature", "foods", "activity", "places", "objects", "symbols", "flags"]}
                                  onEmojiSelect={(e: any) => {
                                    let val: any = `${watchAllFields2.message
                                      ? watchAllFields2.message
                                      : ""
                                      }`;

                                    val = groupCursor
                                      ? val.slice(0, groupCursor) +
                                      e.native +
                                      val.slice(groupCursor, val.length)
                                      : val + " " + e.native;
                                    if (val.length < 1000000) {
                                      setValue2("message", val.toString());
                                      groupCursor &&
                                        setGroupCursor(
                                          groupCursor + e.native.length
                                        );
                                    }
                                  }}
                                  onClickOutside={() => {
                                    !isClickGroupEmoji
                                      ? setShowGroupEmoji(false)
                                      : setClickGroupEmoji(false);
                                  }}
                                />
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                        <div className="chat-input-section p-3 p-lg-4">
                          <form id="chatinput-form" onSubmit={handleSubmit2(onSendGroupMessage)}>
                            <Row className="g-0 align-items-center">
                              <Col lg={11}>
                                <div className="chat-input-feedback">
                                  Please Enter a Message
                                </div>
                                <div className=" ">
                                  <input
                                    type="text"
                                    className="form-control bg-light border-0 mb-2"
                                    id="chat-input"
                                    placeholder="Subject"
                                    {...register2("subject", { required: true, })}
                                  />
                                  <div>
                                    {errors2.subject && (
                                      <span className="text-danger fs-12"> Please Enter Subject</span>
                                    )}
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control chat-input bg-light border-light"
                                    id="chat-input"
                                    placeholder="Type your message..."
                                    onKeyPress={(e: any) => {
                                      e?.target &&
                                        setGroupCursor(e.target.selectionStart)
                                    }
                                    }
                                    {...register2("message", { required: true, })}
                                  />
                                  <div className="emoji-chat">
                                    <a title="Emoji" onClick={() => {
                                      setClickGroupEmoji(true);
                                      setShowGroupEmoji(!showGroupEmoji);
                                    }}>
                                      <EmojiSmile className="cursor-pointer" height={20} width={20} />
                                    </a>
                                  </div>
                                  <div>
                                    {errors2.message && (
                                      <span className="text-danger fs-12"> Please Enter Message</span>
                                    )}
                                  </div>
                                </div>

                              </Col>
                              <Col lg={1}>
                                <div className="chat-input-links ms-2">
                                  <div className="links-list-item">
                                    <Button
                                      type="submit"
                                      color="success"
                                      // onClick={() => { onSendMessage(); }}
                                      // onClick={() => { addMessage(currentRoomId, currentUser.name); setemojiPicker(false); setemojiArray([]); }}
                                      className="chat-send waves-effect waves-light"
                                    >
                                      <i className="ri-send-plane-2-fill align-bottom"></i>
                                    </Button>

                                  </div>

                                </div>
                                <div
                                  className="nav-item dropdown mt-2  links-list-item ">
                                  <Button
                                    type="button"
                                    color="warning"
                                    className="chat-send waves-effect waves-light pl-1"
                                  >
                                    <i className='ri ri-attachment-line icon' />
                                  </Button>

                                  <div className="dropdown-content">
                                    <a className="cursor-pointer" onClick={() => AttachCloudFiles("Attach_Cloud_Files")}>Attach cloud files</a>
                                    <a href="#" className=" cursor-pointer">
                                      <div className="attachment-btn">
                                        <input
                                          id="upload_device"
                                          type="file"
                                          className='input'
                                          onChange={(e: any) => {
                                            onChangeGroup(e)
                                          }
                                          }
                                        />
                                        <label htmlFor="upload_device">  Upload from the device </label>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              {attachments &&
                                attachments?.length > 0 &&
                                attachments.map(
                                  (res: any, index: any) => {
                                    return (
                                      <Col lg={3} className=" text-black-50 box-new">
                                        {res.name} <i className="bx bx-x align-middle me-2 cross-icon"></i>
                                      </Col>
                                    )
                                  })}
                              {filesFolderData &&
                                filesFolderData?.length > 0 &&
                                filesFolderData.map(
                                  (res: any, index: any) => {
                                    return (
                                      <Col lg={3} className=" text-black-50 box-new">
                                        {res.doc_title} <i className="bx bx-x align-middle me-2 cross-icon"></i>
                                      </Col>
                                    )
                                  })}
                            </Row>
                            {/* <div className="d-flex align-items-center">
                              <div className='attachment-btn'>
                                <input type="file" className='input' onChange={(e: any) => {
                                  onChangeGroup(e)
                                }
                                } />
                                <i className='ri ri-attachment-line icon' />
                              </div>
                              <span className=" text-black-50 ms-1"> {documentName}</span>
                            </div> */}
                          </form>
                        </div>
                        <div className={reply ? "replyCard show" : "replyCard"}>
                          <Card className="mb-0">
                            <CardBody className="py-3">
                              <div className="replymessage-block mb-0 d-flex align-items-start">
                                <div className="flex-grow-1">
                                  <h5 className="conversation-name">{reply && reply.sender}</h5>
                                  <p className="mb-0 float-start">{reply && reply.message}</p>
                                  <img
                                    src={avatar1}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="float-end"
                                    style={{ borderRadius: "3px", }}
                                  />
                                </div>
                                <div className="flex-shrink-0">
                                  <button
                                    type="button"
                                    id="close_toggle"
                                    className="btn btn-sm btn-link mt-n2 me-n3 fs-18"
                                    onClick={() => setreply("")}
                                  >
                                    <i className="bx bx-x align-middle me-2"></i>
                                  </button>
                                </div>
                              </div>
                              {/*  */}
                              {/* <div className="attached-data mb-0 d-flex align-items-start">
                                <img
                                  src={avatar1}
                                  alt=""
                                  width={50}
                                  height={50}
                                  style={{ borderRadius: "3px", }}
                                />
                                <input type="text" className="form-control bg-light border-0 mb-0" id="" placeholder="Enter message" name="" style={{ height: "50px", }} />
                              </div> */}
                              {/*  */}
                              {/* <div className="replay-user">
                                <div className="inner-replay-box">
                                  <div>Smriti Misra @SS</div>
                                  <div>Hi Team</div>
                                  <div>Testing</div>
                                </div>
                                <div>Yes <span className="float-end">09:47 AM</span></div>
                              </div> */}
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </Container >
        </div >

        <PersonalInfo
          show={isInfoDetails}
          onCloseClick={() => setIsInfoDetails(false)}
          currentuser={Chat_Box_Username}
          cuurentiseImg={Chat_Box_Image}
        />

        {/* Modal For Filter*/}

        <Modal size="md" isOpen={data.alert} centered>
          <ModalHeader className="mb-2" toggle={() => setData({ alert: false })}>Filter By</ModalHeader>
          <ModalFooter className="">
            <Row className="justify-content-center">
              <form onSubmit={handleSubmit4(onSaveFilter)}>
                <Col className="card-inside-width">
                  <Card className="mt-4">
                    <CardBody >
                      <Col lg={12}>
                        <div className="mb-2">
                          <Label htmlFor="name-field" className="form-label">
                            Keywords
                          </Label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Keywords"
                            autoComplete="off"
                            {...register4("title")}
                          />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="mb-2">
                          <Label htmlFor="name-field" className="form-label">
                            From
                          </Label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="From"
                            autoComplete="off"
                            {...register4("title")}
                          />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="mb-2">
                          <Label htmlFor="name-field" className="form-label">
                            In
                          </Label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="In"
                            autoComplete="off"
                            {...register4("title")}
                          />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="mb-2">
                          <Label htmlFor="name-field" className="form-label">
                            With
                          </Label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="With"
                            autoComplete="off"
                            {...register4("title")}
                          />
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="mb-3">
                          <Label className="form-label">Date</Label>
                          <Controller
                            control={control4}
                            name="searchDate"
                            render={({ field }) => (
                              <CustomDatePicker
                                placeholderText='Date'
                                new_format={"DD/MM/YYYY"}
                                selected={date}
                                onChange={(data: any) => {
                                  field.onChange(data);
                                }}
                              />
                            )}
                          />
                        </div>
                      </Col>
                    </CardBody>
                  </Card>
                  <div className="mt-4  text-center">
                    <button type="button" className="btn btn-light" style={{ marginRight: "10px" }} onClick={() => setData({ alert: false })}>Clear</button>
                    <button type="submit" id="workflow-modal-submit-btn" className="btn btn-primary" onClick={() => onClickFilter()}>Search</button>
                  </div>
                </Col>
              </form>
            </Row>
          </ModalFooter>
        </Modal>
      </React.Fragment >
    </>
  );
};

export default Chat;
