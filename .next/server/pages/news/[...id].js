(() => {
var exports = {};
exports.id = 461;
exports.ids = [461];
exports.modules = {

/***/ 99923:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "mainInfo_main__yEX0a",
	"content": "mainInfo_content__p83v1",
	"headBlock": "mainInfo_headBlock__GoxLB",
	"images": "mainInfo_images__zhV9c"
};


/***/ }),

/***/ 67715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Details),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: external "antd"
const external_antd_namespaceObject = require("antd");
;// CONCATENATED MODULE: external "@ant-design/icons"
const icons_namespaceObject = require("@ant-design/icons");
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: ./app/GlobalRedux/hooks/index.ts

const hooks_useAppDispatch = ()=>useDispatch();
const hooks_useAppSelector = (/* unused pure expression or super */ null && (useSelector));

;// CONCATENATED MODULE: ./app/GlobalRedux/constants/options/options.ts
const options_onPageSelect = [
    {
        value: "10",
        label: "10"
    },
    {
        value: "20",
        label: "20"
    },
    {
        value: "50",
        label: "50"
    },
    {
        value: "100",
        label: "100"
    }
];
const options_byDateSelect = [
    {
        value: "newest",
        label: "Sort by newest"
    },
    {
        value: "oldest",
        label: "Sort by oldest"
    }
];

;// CONCATENATED MODULE: ./app/GlobalRedux/constants/options/index.ts


;// CONCATENATED MODULE: ./app/GlobalRedux/constants/slices/slices.ts
const SliceConstants = {
    GetNews: "carSlice/getNews",
    GetMoreNews: "carSlice/getMoreNews",
    SetFilter: "carSlice/setFilter"
};

;// CONCATENATED MODULE: ./app/GlobalRedux/constants/slices/index.ts


;// CONCATENATED MODULE: ./app/GlobalRedux/constants/api/api.ts
const ApiParameters = {
    ApiKey: "api-key",
    Fields: "show-fields",
    OrderBy: "order-by",
    PageSize: "page-size",
    Query: "q",
    Page: "page"
};
const ApiSettings = {
    ThumbNail: "thumbnail"
};

;// CONCATENATED MODULE: ./app/GlobalRedux/constants/api/index.ts


;// CONCATENATED MODULE: ./app/GlobalRedux/constants/url/url.ts
const url_stubUrl = "https://via.placeholder.com/250X250";

;// CONCATENATED MODULE: ./app/GlobalRedux/constants/url/index.ts


;// CONCATENATED MODULE: ./app/GlobalRedux/constants/index.ts





;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./app/utils/generateUrl.ts

const BASE_URL = "https://content.guardianapis.com/search";
const BASE_URL_DETAILS = process.env.BASE_URL_DETAILS;
const API_KEY = "b0873738-c5a8-4f80-a274-1fc42fc39cad" || 0;
function generateNewsUrl(props) {
    const baseUrl = BASE_URL;
    const queryParams = new URLSearchParams();
    queryParams.append(ApiParameters.Fields, ApiSettings.ThumbNail);
    queryParams.append(ApiParameters.ApiKey, API_KEY);
    queryParams.append(ApiParameters.OrderBy, props.dates);
    queryParams.append(ApiParameters.PageSize, props.onPage);
    queryParams.append(ApiParameters.Query, props.query);
    queryParams.append(ApiParameters.Page, props.page);
    return `${baseUrl}?${queryParams.toString()}`;
}
function generateNewsDetailsUrl(id) {
    const baseUrl = BASE_URL_DETAILS;
    const queryParams = new URLSearchParams();
    queryParams.append(ApiParameters.Fields, ApiSettings.ThumbNail);
    queryParams.append(ApiParameters.ApiKey, API_KEY);
    return `${baseUrl}/${id}?${queryParams.toString()}`;
}

;// CONCATENATED MODULE: ./app/GlobalRedux/Features/news/newsSlice.ts




const initialState = {
    news: [],
    loading: false,
    value: 0,
    filter: {
        dates: "newest",
        onPage: "10",
        page: "1"
    }
};
const newsSlice_getNews = (0,toolkit_namespaceObject.createAsyncThunk)(SliceConstants.GetNews, async function(props, { rejectWithValue  }) {
    try {
        const { data  } = await external_axios_default().get(generateNewsUrl(props));
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
const newsSlice_getMoreNews = (0,toolkit_namespaceObject.createAsyncThunk)(SliceConstants.GetMoreNews, async function(props, { rejectWithValue  }) {
    try {
        const { data  } = await external_axios_default().get(generateNewsUrl(props));
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
const newsSlice_setFilter = (0,toolkit_namespaceObject.createAsyncThunk)(SliceConstants.SetFilter, async function(data, { rejectWithValue  }) {
    try {
        return data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
const newsSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(newsSlice_getNews.pending, (state)=>{
            return {
                ...state,
                loading: true
            };
        });
        builder.addCase(newsSlice_getNews.fulfilled, (state, { payload  })=>{
            return {
                ...state,
                loading: false,
                news: payload.response.results
            };
        });
        builder.addCase(newsSlice_getNews.rejected, (state)=>{
            return {
                ...state,
                loading: false
            };
        });
        builder.addCase(newsSlice_setFilter.fulfilled, (state, { payload  })=>{
            return {
                ...state,
                loading: false,
                filter: payload
            };
        });
        builder.addCase(newsSlice_getMoreNews.fulfilled, (state, { payload  })=>{
            return {
                ...state,
                loading: false,
                news: [
                    ...state.news,
                    ...payload.response.results
                ]
            };
        });
    }
});
/* harmony default export */ const news_newsSlice = (newsSlice.reducer);

;// CONCATENATED MODULE: ./app/features/home/useSort.tsx


function useSort_useSort() {
    const { filter  } = useAppSelector((state)=>state.news);
    const dispatch = useAppDispatch();
    const sortByDate = (value)=>{
        dispatch(setFilter({
            ...filter,
            dates: value
        }));
    };
    const sortByOnPages = (value)=>{
        dispatch(setFilter({
            ...filter,
            onPage: value
        }));
    };
    return {
        sortByDate,
        sortByOnPages
    };
}

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./app/features/home/useSearch.tsx



function useSearch_useSearch() {
    const [submit, setSubmit] = useState(false);
    const [value, setValue] = useState("");
    const { filter  } = useAppSelector((state)=>state.news);
    const dispatch = useAppDispatch();
    const onFind = useCallback(()=>{
        dispatch(getNews({
            ...filter,
            query: submit ? value : ""
        }));
    }, [
        filter,
        submit,
        value
    ]);
    const getMoreData = useCallback(()=>{
        dispatch(getMoreNews({
            ...filter,
            query: submit ? value : "",
            page: String(Number(filter.page) + 1)
        }));
        dispatch(setFilter({
            ...filter,
            page: String(Number(filter.page) + 1)
        }));
    }, [
        filter,
        submit,
        value
    ]);
    useEffect(()=>{
        onFind();
    }, []);
    useEffect(()=>{
        onFind();
    }, [
        filter.dates,
        filter.onPage
    ]);
    const onSearch = useCallback(()=>{
        setSubmit(true);
        dispatch(getNews({
            ...filter,
            query: value
        }));
    }, [
        filter,
        value
    ]);
    const searchByQuery = (value)=>{
        setValue(value);
    };
    return {
        value,
        onSearch,
        getMoreData,
        searchByQuery
    };
}

;// CONCATENATED MODULE: ./app/features/home/sortBlock/SortBlock.tsx








function SortBlock() {
    const { filter  } = useAppSelector((state)=>state.news);
    const { sortByOnPages , sortByDate  } = useSort();
    const { searchByQuery , onSearch , value  } = useSearch();
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.sortBlock,
        children: [
            /*#__PURE__*/ _jsx(Input, {
                value: value,
                placeholder: " Поиск",
                className: styles.input,
                prefix: /*#__PURE__*/ _jsx(SearchOutlined, {
                    rev: undefined
                }),
                onChange: (e)=>searchByQuery(e.target.value)
            }),
            /*#__PURE__*/ _jsx(Button, {
                onClick: onSearch,
                children: "Find"
            }),
            /*#__PURE__*/ _jsx(Select, {
                defaultValue: filter.dates,
                className: styles.sortSelect,
                onChange: sortByDate,
                options: byDateSelect
            }),
            /*#__PURE__*/ _jsx(Select, {
                defaultValue: filter.onPage,
                className: styles.itemsSelect,
                onChange: sortByOnPages,
                options: onPageSelect
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/features/home/sortBlock/index.ts


// EXTERNAL MODULE: ../../../../node_modules/next/image.js
var next_image = __webpack_require__(41952);
;// CONCATENATED MODULE: ./app/uiKit/spinner/Spinner.tsx




const Spinner_Spinner = ()=>{
    const { loading  } = useAppSelector((state)=>state.news);
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: loading && /*#__PURE__*/ _jsx(Space, {
            direction: "vertical",
            className: styles.spinner,
            children: /*#__PURE__*/ _jsx(Space, {
                children: /*#__PURE__*/ _jsx(Spin, {
                    size: "large"
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./app/uiKit/spinner/index.ts


;// CONCATENATED MODULE: ./app/uiKit/index.ts


;// CONCATENATED MODULE: external "react-infinite-scroll-component"
const external_react_infinite_scroll_component_namespaceObject = require("react-infinite-scroll-component");
// EXTERNAL MODULE: ../../../../node_modules/next/link.js
var next_link = __webpack_require__(83537);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/features/home/cardList/CardList.tsx












const { Meta  } = external_antd_namespaceObject.Card;
function CardList() {
    const { news  } = useAppSelector((state)=>state.news);
    const { getMoreData  } = useSearch();
    return /*#__PURE__*/ _jsx(InfiniteScroll, {
        dataLength: news.length,
        next: getMoreData,
        hasMore: true,
        loader: /*#__PURE__*/ _jsx(_Fragment, {}),
        className: styles.infiniteScroll,
        children: /*#__PURE__*/ _jsxs("div", {
            className: styles.cardList,
            children: [
                news.length ? news.map((item)=>/*#__PURE__*/ _jsxs(Card, {
                        hoverable: true,
                        className: styles.card,
                        cover: /*#__PURE__*/ _jsx(Image, {
                            alt: "example",
                            width: 200,
                            height: 180,
                            src: item.fields ? item.fields.thumbnail : stubUrl
                        }),
                        children: [
                            /*#__PURE__*/ _jsx(Meta, {
                                title: item.webTitle,
                                description: formatDate(item.webPublicationDate)
                            }),
                            /*#__PURE__*/ _jsx(Row, {
                                className: styles.detailsBtn,
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: `/news/${item.id}`,
                                    children: /*#__PURE__*/ _jsxs(Button, {
                                        children: [
                                            "Details ",
                                            /*#__PURE__*/ _jsx(RightOutlined, {
                                                rev: undefined
                                            })
                                        ]
                                    })
                                }, item.id)
                            })
                        ]
                    }, item.id)) : /*#__PURE__*/ _jsx("div", {
                    children: "No results"
                }),
                /*#__PURE__*/ _jsx(Spinner, {})
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/features/home/cardList/index.ts


;// CONCATENATED MODULE: ./app/features/home/index.ts



// EXTERNAL MODULE: ./app/features/details/mainInfo/mainInfo.module.css
var mainInfo_module = __webpack_require__(99923);
var mainInfo_module_default = /*#__PURE__*/__webpack_require__.n(mainInfo_module);
;// CONCATENATED MODULE: ./app/utils/convert.ts
function convert_formatDate(isoDateString) {
    const date = new Date(isoDateString);
    const months = [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december"
    ];
    const monthName = months[date.getMonth()];
    const formattedDate = `${date.getDate()} ${monthName} ${date.getFullYear()}, ${formatAMPM(date)}`;
    return formattedDate;
}
function formatAMPM(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 часов становятся 12
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const time = `${hours}:${minutes}:${date.getSeconds()} ${ampm}`;
    return time;
}

;// CONCATENATED MODULE: ./app/features/details/mainInfo/MainInfo.tsx







function MainInfo({ data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_namespaceObject.Button, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.LeftOutlined, {
                            rev: undefined
                        }),
                        "Сome back"
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (mainInfo_module_default()).main,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (mainInfo_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: data.pillarName
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (mainInfo_module_default()).headBlock,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: convert_formatDate(data.webPublicationDate)
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: data.webUrl,
                                    target: "blank",
                                    children: "read on Guardian"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (mainInfo_module_default()).headBlock,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_namespaceObject.Image, {
                                    alt: "example",
                                    className: (mainInfo_module_default()).images,
                                    src: data.fields ? data.fields.thumbnail : url_stubUrl
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: data.sectionName
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: data.webTitle
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/features/details/mainInfo/index.ts


;// CONCATENATED MODULE: ./app/features/details/index.ts


;// CONCATENATED MODULE: ./app/features/index.ts



;// CONCATENATED MODULE: ./pages/news/[...id].tsx



async function fetchData(id) {
    const response = await fetch(generateNewsDetailsUrl(id));
    const data = await response.json();
    return data.response.content;
}
async function getServerSideProps(context) {
    const { id  } = context.query;
    const fullPath = id?.join("/");
    const data = await fetchData(fullPath || "");
    return {
        props: {
            data
        }
    };
}
function Details({ data  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(MainInfo, {
        data: data
    });
}


/***/ }),

/***/ 27733:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 8422:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 80598:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 88373:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 41953:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 5391:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 33966:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 22324:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 67031:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 30132:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 23228:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 97397:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 35727:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 55365:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 46130:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 13650:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 78104:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 74287:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 80373:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 84205:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 46119:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 31513:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 46806:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 16966:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 32647:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 90140:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 80876:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 1627:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 84028:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 73355:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/utils.js");

/***/ }),

/***/ 83390:
/***/ ((module) => {

"use strict";
module.exports = require("../../../../../node_modules/next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 18038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 79375:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [578,510,853,543], () => (__webpack_exec__(67715)));
module.exports = __webpack_exports__;

})();