export default [
  {
    type:"auth", 
    name:"Auth",
    x:0,
    y:0,
    options:[
      {id:"oauth", type:"checkbox", data:{name:"OAuth", value:false}},
      {id:"facebook", type:"checkbox", data:{name:"Facebook", value:false}},
      {id:"facebook_id", type:"text", data:{name:"Facebook Id", value:""}, displayIf:{id:"facebook", equals:true}},
      {id:"facebook_sole", type:"text", data:{name:"Facebook Sole", value:""}, displayIf:{id:"facebook", equals:true}},
      {id:"google", type:"checkbox", data:{name:"Google", value:false}},
      {id:"google_id", type:"text", data:{name:"Google Id", value:""}, displayIf:{id:"google", equals:true}},
      {id:"google_sole", type:"text", data:{name:"Google Sole", value:""}, displayIf:{id:"google", equals:true}},
      {id:"twitter", type:"checkbox", data:{name:"Twitter", value:false}},
      {id:"twitter_id", type:"text", data:{name:"Twitter Id", value:""}, displayIf:{id:"twitter", equals:true}},
      {id:"twitter_sole", type:"text", data:{name:"Twitter Sole", value:""}, displayIf:{id:"twitter", equals:true}},
      {id:"login", type:"text", data:{name:"Admin login", value:"admin"}},
      {id:"password", type:"password", data:{name:"Admin password", value:""}},
      {id:"role", type:"set", data:{name:"Add role", fields:["role_name"]}},
      {id:"role_name", type:"text", data:{name:"Role name", value:"", noRepeat:true}}
    ],
    output:[
      {id:"login_page", name:"Login page"},
      {id:"admin_page", name:"Admin page"},
      {id:"admin", name:"Admin"},
      {id:"guest", name:"Guest"},
      {id:"user", name:"User"},
      {id:"%role_name%", name:"%role_name%", type:"set_connected", set:"role"}
    ],
    input:[]
  },
  {
    type:"router", 
    name:"Router",
    x:0,
    y:0,
    options:[
      {id:"layout", type:"radio", data:{name:"With nav layout", value:"with_nav"}},
      {id:"layout", type:"radio", data:{name:"Without nav layout", value:"without_nav"}},
    ],
    output:[],
    input:[
      {id:"router", name:"Router"},
      {id:"active", name:"Active"},
      {id:"start_page", name:"Start page"},
    ]
  },
  {
    type:"table", 
    name:"Table",
    x:0,
    y:0,
    options:[
      {id:"xedit", type:"checkbox", data:{name:"Make table XEditable", value: false}},
      {id:"field", type:"set", data:{name:"Add field", fields:["name", "type", "sortable", "filterable", "select_option"]}},
      {id:"name", type:"text", data:{name:"Field name", value:""}, noRepeat:true},
      {id:"type", type:"select", data:{name:"Field type", value:"text", options:[
        {name:"Text", value:"text"}, 
        {name:"Date", value:"date"}, 
        {name:"Date range", value:"date_range"}, 
        {name:"Select", value:"select"},
        {name:"Checkbox", value:"checkbox"},
      ]}},
      {id:"select_option", type:"set", data:{name:"Add select option"}, fields:["option_name"], displayIf:{id:"type", equals:"select"}},
      {id:"option_name", type:"text", data:{name:"Option name", value:""}, noRepeat:true},
      {id:"sortable", type:"checkbox", data:{name:"Sortable", value:false}},
      {id:"filterable", type:"checkbox", data:{name:"Filterable", value:false}},
    ],
    input:[],
    output:[
      {id:"table_route", name:"Table route"},
      {id:"add_route", name:"Add route"},
      {id:"edit_route", name:"Edit route"},
      {id:"chart_route", name:"Chart route"},
      {id:"chart_edit_route", name:"Chart edit route"},
    ],
  },
  {
    type:"products", 
    name:"Product",
    x:0,
    y:0,
    options:[
      {id:"local_file_storage", type:"checkbox", data:{name:"Add local file storage", value: false}},
      {id:"label", type:"label", 
        data:{name:"Default fields", value:"Name, Descriptio, Exerpt, Price, Discount price and Image uri are default fields"}
      },
      {id:"field", type:"set", data:{name:"Add field", fields:["name", "type", "sortable", "filterable", "select_option"]}},
      {id:"name", type:"text", data:{name:"Field name", value:""}, noRepeat:true},
      {id:"type", type:"select", data:{name:"Field type", value:"text", options:[
        {name:"Text", value:"text"}, 
        {name:"Date", value:"date"}, 
        {name:"Date range", value:"date_range"}, 
        {name:"Select", value:"select"},
        {name:"Checkbox", value:"checkbox"},
      ]}},
      {id:"select_option", type:"set", data:{name:"Add select option"}, fields:["option_name"], displayIf:{id:"type", equals:"select"}},
      {id:"option_name", type:"text", data:{name:"Option name", value:""}, noRepeat:true},
      {id:"sortable", type:"checkbox", data:{name:"Sortable", value:false}},
      {id:"filterable", type:"checkbox", data:{name:"Filterable", value:false}},
    ],
    input:[],
    output:[
      {id:"prod_page", name:"Product page"},
      {id:"prod_edit_page", name:"Product edit page"},
      {id:"prods_page", name:"Products list page"},
      {id:"card_page", name:"Shop card page"},
      {id:"checkout_page", name:"Checkout page"},
      {id:"shops_management_page", name:"Shops management page"},
      {id:"my_shop_management_page", name:"My shop management page"},
    ]
  },
  {
    type:"chat", 
    name:"Chat",
    x:0,
    y:0,
    options:[],
    input:[],
    output:[]
  },
]