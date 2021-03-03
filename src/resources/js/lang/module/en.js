export default {
  "login": {
    "title": "Login Here",
    "subtitle": "Welcome back, please login to your account.",
    "field": {
      "email": "Email",
      "password": "Password",
    },
    "rememberMe": "Remember me?",
    "forgotPassword": "Forgot password",
    "button": "Login",
    "createAccount": {
      "text": "Don't have an account?",
      "link": "Create an account"
    }
  },

  "register": {
    "title": "Register Here",
    "subtitle": "Please fill in the form below.",
    "field": {
      "name": "Name",
      "email": "Email",
      "password": "Password",
      "passwordConfirmation": "Password Confirmation"
    },
    "button": "Register",
    "existingAccount": {
      "text": "Do you have an account?",
      "link": "Login"
    }
  },

  "forgotPassword": {
    "title": "Forgot Password",
    "subtitle": "Please provide an email to send reset password mail.",
    "field": {
      "email": "Email"
    },
    "button": "Send",
    "createAccount": {
      "text": "Don't have an account?",
      "link": "Create an account"
    },
    "message": {
      "success": "An email has been sent to the address you have provided. Please follow the link in the email to complete your password reset request.",
      "error": "An error has occured. Please check again the email that you provided. If the problem persists, please contact us for further assistance."
    }
  },

  "resetPassword": {
    "title": "Reset Password",
    "subtitle": "Please provide new password.",
    "field": {
      "password": "New Password",
      "passwordConfirmation": "New Password Confirmation"
    },
    "button": "Reset Password",
    "createAccount": {
      "text": "Don't have an account?",
      "link": "Create an account"
    },
    "message": {
      "success": "Password reset successful. You can now login with the new password. You will now be redirected to login page.",
      "error": "An error has occured. Please check again the password and password confirmation that you provided. If the problem persists, please contact us for further assistance."
    }
  },

  "sidebar": {
    "dashboard": "Dashboard",
    "mainMenu": "Main Menu",
    "configurationMenu": "Configuration Menu"
  },

  "myProfile": {
    "title": "My Profile",
    "logout": "Logout"
  },

  "404": {
    "title": "Opps, Sorry",
    "subtitle": "The page you were looking for was not found.",
    "button": "Go Home"
  },

  "action": {
    "bulkDelete": "Bulk Delete",
    "add": "Add",
    "edit": "Edit",
    "delete": {
      "title": "Confirm",
      "text": "Are you sure?",
      "accept": "Accept",
      "cancel": "Cancel"
    },
    "addItem": "Add Item",
    "roles": "Roles",
    "sort": "Sort"
  },

  "alert": {
    "success": "Success",
    "danger": "Danger"
  },

  "activityLog": {
    "title": "Activity Log",
    "warning": {
      "notAllowed": "You're not allowed to browse Activity Log."
    },
    "header": {
      "logName": "Log Name",
      "causerType": "Causer Type",
      "causerId": "Causer Id",
      "subjectType": "Subject Type",
      "subjectId": "Subject Id",
      "description": "Description",
      "dateLogged": "Date Logged",
      "action": "Action",
    },
    "footer": {
      "descriptionTitle": "Registries",
      "descriptionConnector": "of",
      "descriptionBody": "Pages"
    },
    "detail": {
      "title": "Detail Activity Log",
      "causer": {
        "title": "Detail Causer"
      },
      "subject": {
        "title": "Detail Subject"
      },
      "properties": {
        "title": "Properties"
      }
    }
  },

  "site": {
    "action": "Action",
    "deletedImage": {
      "title": "Deleted Image",
      "text": "The selected image was successfully deleted"
    },
    "configUpdated": "Config Updated",
    "add": {
      "title": "Add Site Configuration",
      "field": {
        "displayName": {
          "title": "Display Name",
          "placeholder": "Example: Display Name"
        },
        "key": {
          "title": "Key",
          "placeholder": "Example: key_sample"
        },
        "type": {
          "title": "Type",
          "placeholder": "Type"
        },
        "group": {
          "title": "Group",
          "placeholder": "Group"
        },
        "options": {
          "title": "Options",
          "description": "Options is required for Checkbox, Radio, Select, Select-multiple. Example: ",
          "example": `{"items": [{"label":"This is label","value":"this_is_value"}] }`
        },
      },
      "button": "Save"
    }
  },

  "crud": {
    "title": "CRUD",
    "warning": {
      "notAllowed": "You're not allowed to browse CRUD."
    },
    "header": {
      "table": "Table",
      "action": "Action"
    },
    "body": {
      "button": "Add CRUD to this table"
    },
    "footer": {
      "descriptionTitle": "Registries",
      "descriptionConnector": "of",
      "descriptionBody": "Pages"
    },
    "add": {
      "title": {
        "table": "Add CRUD for {tableName}",
        "field": "Add CRUD Fields for {tableName}"
      },
      "field": {
        "tableName": {
          "title": "Table Name",
          "placeholder": "Table Name"
        },
        "generatePermissions": "Generate Permissions",
        "serverSide": "Server Side",
        "displayNameSingular": {
          "title": "Display Name(Singular)",
          "placeholder": "Display Name(Singular)"
        },
        "displayNamePlural": {
          "title": "Display Name(Plural)",
          "placeholder": "Display Name(Plural)"
        },
        "urlSlug": {
          "title": "URL Slug (must be unique)",
          "placeholder": "URL Slug (must be unique)"
        },
        "icon": {
          "title": "Icon",
          "placeholder": "Icon"
        },
        "modelName": {
          "title": "Model Name",
          "placeholder": "Model Name"
        },
        "controllerName": {
          "title": "Controller Name",
          "placeholder": "Controller Name"
        },
        "orderColumn": {
          "title": "Order Column",
          "placeholder": "Order Column"
        },
        "orderDisplayColumn": {
          "title": "Order Display Column",
          "placeholder": "Order Display Column",
          "description": "<p class='text-muted'>Order Column will be filled with numbers to sort data if this field is set</p>"
        },
        "orderDirection": {
          "title": "Order Direction",
          "value": {
            "ascending": "Ascending",
            "descending": "Descending"
          },
          "placeholder": "Order Direction"
        },
        "defaultServerSideSearchField": {
          "title": "Default Server Side Search Field",
          "placeholder": "Default Server Side Search Field"
        },
        "description": {
          "title": "Description",
          "placeholder": "Description"
        },
      },
      "header": {
        "field": "Field",
        "visibility": "Visibility",
        "inputType": "Input Type",
        "displayName": "Display Name",
        "optionalDetails": "Optional Details",
      },
      "body": {
        "type": "Type:",
        "required": {
          "title": "Required:",
          "yes": "Yes",
          "no": "No"
        },
        "browse": "Browse",
        "read": "Read",
        "edit": "Edit",
        "add": "Add",
        "delete": "Delete",
        "displayName": "Display Name",
        "setRelation": "Set Relation",
        "relationType": "Relation Type",
        "destinationTable": "Destination Table",
        "destinationTableColumn": "Destination Column",
        "destinationTableDisplayColumn": "Destination Column To Display",
        "saveRelation": "Save",
        "cancelRelation": "Cancel",
      },
      "button": "Save"
    },
    "edit": {
      "title": {
        "table": "Edit CRUD for {tableName}",
        "field": "Edit CRUD Fields for {tableName}"
      },
      "field": {
        "tableName": {
          "title": "Table Name",
          "placeholder": "Table Name"
        },
        "generatePermissions": "Generate Permissions",
        "serverSide": "Server Side",
        "displayNameSingular": {
          "title": "Display Name(Singular)",
          "placeholder": "Display Name(Singular)"
        },
        "displayNamePlural": {
          "title": "Display Name(Plural)",
          "placeholder": "Display Name(Plural)"
        },
        "urlSlug": {
          "title": "URL Slug (must be unique)(readonly)",
          "placeholder": "URL Slug (must be unique)"
        },
        "icon": {
          "title": "Icon",
          "placeholder": "Icon"
        },
        "modelName": {
          "title": "Model Name",
          "placeholder": "Model Name"
        },
        "controllerName": {
          "title": "Controller Name",
          "placeholder": "Controller Name"
        },
        "orderColumn": {
          "title": "Order Column",
          "placeholder": "Order Column"
        },
        "orderDisplayColumn": {
          "title": "Order Display Column",
          "placeholder": "Order Display Column",
          "description": "<p class='text-muted'>Order Column will be filled with numbers to sort data if this field is set</p>"
        },
        "orderDirection": {
          "title": "Order Direction",
          "value": {
            "ascending": "Ascending",
            "descending": "Descending"
          },
          "placeholder": "Order Direction"
        },
        "defaultServerSideSearchField": {
          "title": "Default Server Side Search Field",
          "placeholder": "Default Server Side Search Field"
        },
        "description": {
          "title": "Description",
          "placeholder": "Description"
        },
      },
      "header": {
        "field": "Field",
        "visibility": "Visibility",
        "inputType": "Input Type",
        "displayName": "Display Name",
        "optionalDetails": "Optional Details",
      },
      "body": {
        "type": "Type:",
        "required": {
          "title": "Required:",
          "yes": "Yes",
          "no": "No"
        },
        "browse": "Browse",
        "read": "Read",
        "edit": "Edit",
        "add": "Add",
        "delete": "Delete",
        "displayName": "Display Name",
        "setRelation": "Set Relation",
        "relationType": "Relation Type",
        "destinationTable": "Destination Table",
        "destinationTableColumn": "Destination Column",
        "destinationTableDisplayColumn": "Destination Column To Display",
        "saveRelation": "Save",
        "cancelRelation": "Cancel",
      },
      "button": "Save"
    }
  },

  "menu": {
    "title": "Menu",
    "warning": {
      "notAllowedToBrowse": "You're not allowed to browse Menu",
      "notAllowedToAdd": "You're not allowed to add Menu",
      "notAllowedToEdit": "You're not allowed to edit Menu",
    },
    "header": {
      "key": "Key",
      "displayName": "Display Name",
      "action": "Action"
    },
    "footer": {
      "descriptionTitle": "Registries",
      "descriptionConnector": "of",
      "descriptionBody": "Pages"
    },
    "add": {
      "title": "Add Menu",
      "field": {
        "key": {
          "title": "Key",
          "placeholder": "menu_key"
        },
        "displayName": {
          "title": "Display Name",
          "placeholder": "Display Name"
        }
      },
      "button": "Save"
    },
    "edit": {
      "title": "Edit Menu",
      "field": {
        "key": {
          "title": "Key",
          "placeholder": "menu_key"
        },
        "displayName": {
          "title": "Display Name",
          "placeholder": "Display Name"
        }
      },
      "button": "Save"
    },
    "builder": {
      "title": "Menu Item",
      "popup": {
        "add": {
          "title": "Add Menu Item",
          "field": {
            "title": "Title",
            "url": "Url",
            "target": {
              "title": "Target",
              "value": {
                "thisTab": "This Tab",
                "newTab": "New Tab"
              }
            },
            "icon": {
              "title": "Icon",
              "description": "Use&nbsp;<a href='https://material.io/resources/icons/?style=baseline' target='_blank'>material design icon</a>"
            },
          },
          "button": {
            "add": "Add",
            "cancel": "Cancel"
          }
        },
        "edit": {
          "title": "Edit Menu Item",
          "field": {
            "title": "Title",
            "url": "Url",
            "target": {
              "title": "Target",
            },
            "icon": {
              "title": "Icon",
              "description": "Use&nbsp;<a href='https://material.io/resources/icons/?style=baseline' target='_blank'>material design icon</a>"
            },
          },
          "button": {
            "edit": "Edit",
            "cancel": "Cancel"
          }
        }
      }
    }
  },

  "user": {
    "title": "User",
    "header": {
      "name": "Name",
      "email": "Email",
      "action": "Action"
    },
    "footer": {
      "descriptionTitle": "Registries",
      "descriptionConnector": "of",
      "descriptionBody": "Pages"
    },
    "add": {
      "title": "Add User",
      "field": {
        "name": {
          "title": "Name",
          "placeholder": "Name"
        },
        "email": {
          "title": "Email",
          "placeholder": "Email"
        },
        "password": {
          "title": "Password",
          "placeholder": "Password"
        },
        "avatar": {
          "title": "Avatar",
          "placeholder": "Avatar"
        },
        "additionalInfo": {
          "title": "Additional Info (JSON)",
          "placeholder": "Additional Info (JSON)",
          "invalid": "Additional Info is invalid"
        },
      },
      "button": "Save"
    },
    "edit": {
      "title": "Edit User",
      "field": {
        "name": {
          "title": "Name",
          "placeholder": "Name"
        },
        "email": {
          "title": "Email",
          "placeholder": "Email"
        },
        "password": {
          "title": "Password",
          "placeholder": "Leave blank if unchanged"
        },
        "avatar": {
          "title": "Avatar",
          "placeholder": "New Avatar"
        },
        "additionalInfo": {
          "title": "Additional Info (JSON)",
          "placeholder": "Additional Info (JSON)",
          "invalid": "Additional Info is invalid"
        },
      },
      "button": "Save"
    },
    "detail": {
      "title": "Detail User",
      "avatar": "Avatar",
      "name": "Name",
      "email": "Email",
      "additionalInfo": "Additional Info",
    },
    "roles": {
      "title": "Roles",
      "header": {
        "name": "Name",
        "description": "Description",
        "action": "Action"
      },
      "button": "Set selected roles for user",
      "success": {
        "title": "Success",
        "text": 'Roles has been set',
      }
    }
  },

  "role": {
    "title": "Role",
    "warning": {
      "notAllowedToBrowse": "You're not allowed to browse Role",
      "notAllowedToAdd": "You're not allowed to add Role",
      "notAllowedToEdit": "You're not allowed to edit Role",
      "notAllowedToBrowsePermission": "You're not allowed to browse Roles Permissions",
    },
    "header": {
      "name": "Name",
      "displayName": "Display Name",
      "description": "Description",
      "action": "Action"
    },
    "footer": {
      "descriptionTitle": "Registries",
      "descriptionConnector": "of",
      "descriptionBody": "Pages"
    },
    "add": {
      "title": "Add Role",
      "field": {
        "name": {
          "title": "Name",
          "placeholder": "Name"
        },
        "displayName": {
          "title": "Display Name",
          "placeholder": "Display Name"
        },
        "description": {
          "title": "Description",
          "placeholder": "Description"
        },
      },
      "button": "Save"
    },
    "edit": {
      "title": "Edit Role",
      "field": {
        "name": {
          "title": "Name",
          "placeholder": "Name"
        },
        "displayName": {
          "title": "Display Name",
          "placeholder": "Display Name"
        },
        "description": {
          "title": "Description",
          "placeholder": "Description"
        },
      },
      "button": "Save"
    },
    "detail": {
      "title": "Detail Role",
      "name": "Name",
      "displayName": "Display Name",
      "description": "Description", 
      "button": {
        "edit": "Edit",
        "permission": "Permission"
      }
    },
    "permission": {
      "title": "Permissions",
      "header": {
        "key": "Key",
        "description": "Description"
      },
      "button": "Set selected permissions for role",
      "success": {
        "title": "Success",
        "text": 'Permissions has been set',
      }
    }
  },

  "permission": {
    "title": "Permission",
    "warning": {
      "notAllowedToBrowse": "You're not allowed to browse Permission",
      "notAllowedToAdd": "You're not allowed to add Permission",
      "notAllowedToEdit": "You're not allowed to edit Permission",
      "notAllowedToRead": "You're not allowed to read Permission",
    },
    "header": {
      "key": "Key",
      "description": "Description",
      "tableName": "Table Name",
      "alwaysAllow": "Always Allow",
      "action": "Action",
    },
    "footer": {
      "descriptionTitle": "Registries",
      "descriptionConnector": "of",
      "descriptionBody": "Pages"
    },
    "add": {
      "title": "Add Permission",
      "field": {
        "key": {
          "title": "Key",
          "placeholder": "Key"
        },
        "alwaysAllow": "Always Allow",
        "description": {
          "title": "Description",
          "placeholder": "Description"
        },
        "tableName": {
          "title": "Table Name",
          "placeholder": "Table Name",
        }
      },
      "button": "Save"
    },
    "edit": {
      "title": "Edit Permission",
      "field": {
        "key": {
          "title": "Key",
          "placeholder": "Key"
        },
        "alwaysAllow": "Always Allow",
        "description": {
          "title": "Description",
          "placeholder": ""
        },
        "tableName": {
          "title": "Table Name",
          "placeholder": "Table Name",
        }
      },
      "button": "Save"
    },
    "detail": {
      "title": "Detail Permission",
      "key": "Key",
      "description": "Description",
      "tableName": "Table Name",
      "alwaysAllow": {
        "title": "Always Allow",
        "yes": "Yes",
        "no": "No",
      },
      "button": "Edit"
    }
  },

  "crudGenerated": {
    "warning": {
      "notAllowedToBrowse": "You're not allowed to browse {tableName}",
      "notAllowedToAdd": "You're not allowed to add {tableName}",
      "notAllowedToEdit": "You're not allowed to edit {tableName}",
      "notAllowedToRead": "You're not allowed to read {tableName}",
    },
    "header": {
      "action": "Action"
    },
    "footer": {
      "descriptionTitle": "Registries",
      "descriptionConnector": "of",
      "descriptionBody": "Pages"
    },
    "add": {
      "title": "Add {tableName}",
      "button": "Save"
    },
    "edit": {
      "title": "Edit {tableName}",
      "button": "Save"
    },
    "detail": {
      "title": "Detail {tableName}",
      "button": "Edit"
    },
    "sort": {
      "title": "Sort {tableName}",
    }
  }
}