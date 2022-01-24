TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_80221471_8C66_C962_41D8_3C09546801BB",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.82,
        "yaw": 27.4,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "class": "ImageResourceLevel",
           "width": 52,
           "url": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 0.06
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 27.4,
        "hfov": 5.82,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "class": "ImageResourceLevel",
           "width": 104,
           "url": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 0.06
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_8097890D_8C67_38A0_41DE_BD965A0442E2, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_9C75D66D_8C67_489A_41E0_7DB4F69E5FD6, null, null, null, null, false)"
       }
      ],
      "id": "overlay_80B24904_8C67_D8A0_41D4_A94E1785534F",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 6.91,
        "yaw": 55.6,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 62,
           "url": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": 5.84
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 55.6,
        "hfov": 6.91,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 116,
           "class": "ImageResourceLevel",
           "width": 124,
           "url": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 5.84
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "hfov": 6.91,
      "yaw": 55.6,
      "hideEasing": "cubic_out",
      "id": "popup_8097890D_8C67_38A0_41DE_BD965A0442E2",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 768,
         "class": "ImageResourceLevel",
         "width": 1024,
         "url": "media/popup_8097890D_8C67_38A0_41DE_BD965A0442E2_0_2.jpg"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": 5.84
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_81B6D732_8C61_48FD_41D7_7486B49D9E9F, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_9C4D667C_8C67_497B_41CB_F198E3776640, null, null, null, null, false)"
       }
      ],
      "id": "overlay_813275FF_8C66_CB62_41DD_D767226C80CD",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.85,
        "yaw": -4.69,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 47,
           "class": "ImageResourceLevel",
           "width": 53,
           "url": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 9.99
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -4.69,
        "hfov": 5.85,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 94,
           "class": "ImageResourceLevel",
           "width": 106,
           "url": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 9.99
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "hfov": 5.85,
      "yaw": -4.69,
      "hideEasing": "cubic_out",
      "id": "popup_81B6D732_8C61_48FD_41D7_7486B49D9E9F",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 768,
         "class": "ImageResourceLevel",
         "width": 1024,
         "url": "media/popup_81B6D732_8C61_48FD_41D7_7486B49D9E9F_0_2.jpg"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": 9.99
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_8328F4A3_8C63_499E_41CC_8DF201995656, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_9C4E067C_8C67_497B_41DD_A62A7DDCE8DF, null, null, null, null, false)"
       }
      ],
      "id": "overlay_823C1202_8C61_489C_41BA_EE70C99A0F8A",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.13,
        "yaw": 18.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 53,
           "class": "ImageResourceLevel",
           "width": 46,
           "url": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": 8.1
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 18.8,
        "hfov": 5.13,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 107,
           "class": "ImageResourceLevel",
           "width": 92,
           "url": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_0_HS_3_0.png"
          }
         ]
        },
        "pitch": 8.1
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "hfov": 5.13,
      "yaw": 18.8,
      "hideEasing": "cubic_out",
      "id": "popup_8328F4A3_8C63_499E_41CC_8DF201995656",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 768,
         "class": "ImageResourceLevel",
         "width": 1024,
         "url": "media/popup_8328F4A3_8C63_499E_41CC_8DF201995656_0_2.jpg"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": 8.1
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_82FD17CE_8C63_D7A9_41D0_AD9F54819E86, {'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0,'borderColor':'#000000','pressedIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderSize':0,'iconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'iconLineWidth':5,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','iconHeight':20,'rollOverIconColor':'#666666','pressedBackgroundOpacity':0.3,'paddingRight':5,'pressedIconHeight':20,'paddingTop':5,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'backgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'iconColor':'#000000'}, this.ImageResource_9C4FC67C_8C67_497B_41E0_9A69855421CF, null, null, null, null, false)"
       }
      ],
      "id": "overlay_825E1811_8C63_D8BB_41C4_E210A127C18D",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.13,
        "yaw": 33.12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 49,
           "class": "ImageResourceLevel",
           "width": 37,
           "url": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "pitch": 8.86
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 33.12,
        "hfov": 4.13,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 98,
           "class": "ImageResourceLevel",
           "width": 74,
           "url": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_0_HS_4_0.png"
          }
         ]
        },
        "pitch": 8.86
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "popupMaxWidth": "95%",
      "rotationY": 0,
      "popupMaxHeight": "95%",
      "hfov": 4.13,
      "yaw": 33.12,
      "hideEasing": "cubic_out",
      "id": "popup_82FD17CE_8C63_D7A9_41D0_AD9F54819E86",
      "hideDuration": 500,
      "class": "PopupPanoramaOverlay",
      "showDuration": 500,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 768,
         "class": "ImageResourceLevel",
         "width": 1024,
         "url": "media/popup_82FD17CE_8C63_D7A9_41D0_AD9F54819E86_0_2.jpg"
        }
       ]
      },
      "showEasing": "cubic_in",
      "pitch": 8.86
     }
    ]
   }
  ],
  "id": "panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "label": "\u0648\u0631\u0648\u062f\u06cc \u0645\u0644\u06a9",
  "vfov": 180,
  "hfovMax": 120,
  "class": "Panorama",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_t.jpg"
 },
 {
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "id": "panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 31.01,
   "pitch": -2.43
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3032,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2_hq.jpeg"
      },
      {
       "height": 1885,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)"
       }
      ],
      "id": "overlay_810D76C9_8C61_C996_41C6_BEFF63880D85",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.03,
        "yaw": -166.41,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 49,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.9
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -166.41,
        "hfov": 5.03,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 98,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -6.9
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "id": "overlay_81D4AFB4_8C6E_D7FC_41C9_981626FE867F",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.28,
        "yaw": 10.07,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 47,
           "url": "media/panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.16
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 10.07,
        "hfov": 5.28,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 80,
           "class": "ImageResourceLevel",
           "width": 95,
           "url": "media/panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -7.16
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "label": "\u0628\u062e\u0634 1",
  "vfov": 169.61,
  "hfovMax": 120,
  "class": "Panorama",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2_t.jpg"
 },
 {
  "id": "panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.25,
   "pitch": 3.87
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3097,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D_hq.jpeg"
      },
      {
       "height": 1926,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "id": "overlay_826F6DFC_8C6F_FB72_41C5_24136BC03F71",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.57,
        "yaw": -156.62,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "class": "ImageResourceLevel",
           "width": 49,
           "url": "media/panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 1.51
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -156.62,
        "hfov": 5.57,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "class": "ImageResourceLevel",
           "width": 99,
           "url": "media/panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 1.51
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "id": "overlay_8377AB7F_8C6F_3F6F_41E1_6B6593541697",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.07,
        "yaw": 57.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -0.75
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 57.35,
        "hfov": 5.07,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 89,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -0.75
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "label": "\u0628\u062e\u0634 2",
  "vfov": 173.28,
  "hfovMax": 120,
  "class": "Panorama",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D_t.jpg"
 },
 {
  "id": "panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 83.2,
   "pitch": 5.93
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_86A064ED_8C63_C978_41DD_EDE432C74541_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3110,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_86A064ED_8C63_C978_41DD_EDE432C74541_hq.jpeg"
      },
      {
       "height": 1934,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_86A064ED_8C63_C978_41DD_EDE432C74541.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "id": "overlay_8255C68A_8C61_C993_41D3_F73C48678613",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.78,
        "yaw": -54.74,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/panorama_86A064ED_8C63_C978_41DD_EDE432C74541_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.09
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -54.74,
        "hfov": 4.78,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 86,
           "url": "media/panorama_86A064ED_8C63_C978_41DD_EDE432C74541_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -7.09
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "id": "overlay_83074EAD_8C61_3996_41C6_B01F15A51101",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.03,
        "yaw": -111.91,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 45,
           "url": "media/panorama_86A064ED_8C63_C978_41DD_EDE432C74541_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -7.09
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -111.91,
        "hfov": 5.03,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 103,
           "class": "ImageResourceLevel",
           "width": 90,
           "url": "media/panorama_86A064ED_8C63_C978_41DD_EDE432C74541_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -7.09
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_86A064ED_8C63_C978_41DD_EDE432C74541",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "label": "\u0628\u062e\u0634 3",
  "vfov": 173.98,
  "hfovMax": 120,
  "class": "Panorama",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_86A064ED_8C63_C978_41DD_EDE432C74541_t.jpg"
 },
 {
  "id": "panorama_86A064ED_8C63_C978_41DD_EDE432C74541_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.98,
   "pitch": -3.1
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_86B66D83_8C63_5BAA_41C8_0E46312868D3_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3131,
       "class": "ImageResourceLevel",
       "width": 6434,
       "url": "media/panorama_86B66D83_8C63_5BAA_41C8_0E46312868D3_hq.jpeg"
      },
      {
       "height": 1947,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_86B66D83_8C63_5BAA_41C8_0E46312868D3.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "enabledInCardboard": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "id": "overlay_82129B4E_8C63_D895_41AB_81D5428EEAF3",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 5.53,
        "yaw": 98.12,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 49,
           "url": "media/panorama_86B66D83_8C63_5BAA_41C8_0E46312868D3_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -6.87
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 98.12,
        "hfov": 5.53,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 80,
           "class": "ImageResourceLevel",
           "width": 99,
           "url": "media/panorama_86B66D83_8C63_5BAA_41C8_0E46312868D3_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -6.87
       }
      ]
     }
    ]
   }
  ],
  "id": "panorama_86B66D83_8C63_5BAA_41C8_0E46312868D3",
  "pitch": 0,
  "hfov": 360,
  "partial": false,
  "label": "\u0628\u062e\u0634 4",
  "vfov": 175.16,
  "hfovMax": 120,
  "class": "Panorama",
  "hfovMin": 60,
  "thumbnailUrl": "media/panorama_86B66D83_8C63_5BAA_41C8_0E46312868D3_t.jpg"
 },
 {
  "id": "panorama_86B66D83_8C63_5BAA_41C8_0E46312868D3_camera",
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 131.42,
   "pitch": -4.51
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_86A064ED_8C63_C978_41DD_EDE432C74541",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_86A064ED_8C63_C978_41DD_EDE432C74541_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_86B66D83_8C63_5BAA_41C8_0E46312868D3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_86B66D83_8C63_5BAA_41C8_0E46312868D3_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_8396762E_8C67_4897_41B0_64D4A12E8269",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_86A5C627_8C62_C8EA_41DC_0395BCAE3869_camera",
    "begin": "this.setEndToItemIndex(this.playList_8396762E_8C67_4897_41B0_64D4A12E8269, 0, 1)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_867A0A7E_8C62_D959_41B0_863105B9B6A2_camera",
    "begin": "this.setEndToItemIndex(this.playList_8396762E_8C67_4897_41B0_64D4A12E8269, 1, 2)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_8614EBBC_8C63_7FD8_41B7_56C6A9EABC2D_camera",
    "begin": "this.setEndToItemIndex(this.playList_8396762E_8C67_4897_41B0_64D4A12E8269, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_86A064ED_8C63_C978_41DD_EDE432C74541",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_86A064ED_8C63_C978_41DD_EDE432C74541_camera",
    "begin": "this.setEndToItemIndex(this.playList_8396762E_8C67_4897_41B0_64D4A12E8269, 3, 4)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_86B66D83_8C63_5BAA_41C8_0E46312868D3",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_86B66D83_8C63_5BAA_41C8_0E46312868D3_camera",
    "begin": "this.setEndToItemIndex(this.playList_8396762E_8C67_4897_41B0_64D4A12E8269, 4, 0)"
   }
  ]
 },
 "this.popup_8097890D_8C67_38A0_41DE_BD965A0442E2",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_8097890D_8C67_38A0_41DE_BD965A0442E2_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_8097890D_8C67_38A0_41DE_BD965A0442E2_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_8097890D_8C67_38A0_41DE_BD965A0442E2_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_8097890D_8C67_38A0_41DE_BD965A0442E2_0_3.jpg"
   }
  ],
  "id": "ImageResource_9C75D66D_8C67_489A_41E0_7DB4F69E5FD6"
 },
 "this.popup_81B6D732_8C61_48FD_41D7_7486B49D9E9F",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_81B6D732_8C61_48FD_41D7_7486B49D9E9F_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_81B6D732_8C61_48FD_41D7_7486B49D9E9F_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_81B6D732_8C61_48FD_41D7_7486B49D9E9F_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_81B6D732_8C61_48FD_41D7_7486B49D9E9F_0_3.jpg"
   }
  ],
  "id": "ImageResource_9C4D667C_8C67_497B_41CB_F198E3776640"
 },
 "this.popup_8328F4A3_8C63_499E_41CC_8DF201995656",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_8328F4A3_8C63_499E_41CC_8DF201995656_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_8328F4A3_8C63_499E_41CC_8DF201995656_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_8328F4A3_8C63_499E_41CC_8DF201995656_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_8328F4A3_8C63_499E_41CC_8DF201995656_0_3.jpg"
   }
  ],
  "id": "ImageResource_9C4E067C_8C67_497B_41DD_A62A7DDCE8DF"
 },
 "this.popup_82FD17CE_8C63_D7A9_41D0_AD9F54819E86",
 {
  "class": "ImageResource",
  "levels": [
   {
    "height": 3024,
    "class": "ImageResourceLevel",
    "width": 4032,
    "url": "media/popup_82FD17CE_8C63_D7A9_41D0_AD9F54819E86_0_0.jpg"
   },
   {
    "height": 1536,
    "class": "ImageResourceLevel",
    "width": 2048,
    "url": "media/popup_82FD17CE_8C63_D7A9_41D0_AD9F54819E86_0_1.jpg"
   },
   {
    "height": 768,
    "class": "ImageResourceLevel",
    "width": 1024,
    "url": "media/popup_82FD17CE_8C63_D7A9_41D0_AD9F54819E86_0_2.jpg"
   },
   {
    "height": 384,
    "class": "ImageResourceLevel",
    "width": 512,
    "url": "media/popup_82FD17CE_8C63_D7A9_41D0_AD9F54819E86_0_3.jpg"
   }
  ],
  "id": "ImageResource_9C4FC67C_8C67_497B_41E0_9A69855421CF"
 }
], "children": [
 {
  "progressHeight": 10,
  "toolTipOpacity": 1,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipDisplayTime": 600,
  "toolTipFontColor": "#606060",
  "borderRadius": 0,
  "progressBorderSize": 0,
  "shadow": false,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "minWidth": 100,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "playbackBarProgressOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "paddingBottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderRadius": 0,
  "minHeight": 50,
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "paddingLeft": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "class": "ViewerArea",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "height": "100%",
  "playbackBarHeadShadow": true,
  "paddingTop": 0,
  "toolTipShadowBlurRadius": 3,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "width": "100%",
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "toolTipShadowHorizontalLength": 0,
  "progressRight": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeight": 10,
  "progressBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "progressOpacity": 1,
  "toolTipFontFamily": "Arial",
  "progressLeft": 0,
  "toolTipBorderColor": "#767676",
  "id": "MainViewer",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarBorderRadius": 0,
  "progressBorderColor": "#000000",
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarRight": 0,
  "progressBottom": 0,
  "toolTipBorderSize": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "playbackBarOpacity": 1
 },
 {
  "verticalAlign": "bottom",
  "children": [
   {
    "minHeight": 0,
    "verticalAlign": "top",
    "itemLabelPosition": "bottom",
    "itemThumbnailShadowBlurRadius": 4,
    "paddingLeft": 20,
    "backgroundColor": [
     "#000000"
    ],
    "itemPaddingTop": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 5,
    "itemThumbnailShadowVerticalLength": 3,
    "selectedItemLabelFontWeight": "bold",
    "paddingRight": 20,
    "gap": 10,
    "itemPaddingRight": 3,
    "itemLabelFontColor": "#FFFFFF",
    "itemLabelFontFamily": "Arial",
    "paddingTop": 10,
    "itemThumbnailShadowColor": "#000000",
    "itemThumbnailShadowHorizontalLength": 3,
    "shadow": false,
    "borderRadius": 5,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.8,
    "scrollBarWidth": 10,
    "backgroundColorRatios": [
     0
    ],
    "itemThumbnailBorderRadius": 5,
    "maxHeight": 600,
    "backgroundColorDirection": "vertical",
    "itemVerticalAlign": "middle",
    "itemHorizontalAlign": "center",
    "scrollBarMargin": 2,
    "itemOpacity": 1,
    "itemMode": "normal",
    "maxWidth": 800,
    "layout": "horizontal",
    "backgroundOpacity": 0.2,
    "itemThumbnailShadow": true,
    "minWidth": 0,
    "itemLabelTextDecoration": "none",
    "itemBorderRadius": 0,
    "itemThumbnailOpacity": 1,
    "itemLabelFontStyle": "normal",
    "itemBackgroundColor": [],
    "horizontalAlign": "left",
    "itemThumbnailShadowSpread": 1,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailWidth": 100,
    "itemLabelFontWeight": "normal",
    "data": {
     "name": "ThumbnailList442"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 75,
    "scrollBarOpacity": 0.5,
    "paddingBottom": 10,
    "itemThumbnailScaleMode": "fit_outside",
    "playList": "this.playList_8396762E_8C67_4897_41B0_64D4A12E8269",
    "itemPaddingLeft": 3,
    "itemBackgroundColorRatios": [],
    "class": "ThumbnailList",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "itemPaddingBottom": 3
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "overflow": "visible",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "height": 200,
  "paddingTop": 0,
  "creationPolicy": "delayed",
  "borderRadius": 0,
  "gap": 10,
  "shadow": false,
  "scrollBarWidth": 10,
  "minWidth": 20,
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "data": {
   "name": "Container441"
  },
  "bottom": 0,
  "paddingBottom": 0,
  "left": 0,
  "minHeight": 20,
  "scrollBarOpacity": 0.5,
  "right": 0,
  "paddingLeft": 0,
  "class": "Container"
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingTop": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "top": 0,
  "visible": false,
  "backgroundOpacity": 0.55,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent15698"
  },
  "bottom": 0,
  "minWidth": 0,
  "paddingBottom": 0,
  "left": 0,
  "minHeight": 0,
  "right": 0,
  "paddingLeft": 0,
  "class": "UIComponent"
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "backgroundColor": [],
  "paddingTop": 0,
  "shadow": false,
  "borderRadius": 0,
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "scaleMode": "custom",
  "top": 0,
  "visible": false,
  "backgroundOpacity": 1,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage15699"
  },
  "bottom": 0,
  "minWidth": 0,
  "paddingBottom": 0,
  "left": 0,
  "minHeight": 0,
  "right": 0,
  "paddingLeft": 0,
  "class": "ZoomImage"
 },
 {
  "pressedIconColor": "#888888",
  "verticalAlign": "middle",
  "shadowBlurRadius": 6,
  "borderSize": 0,
  "horizontalAlign": "center",
  "paddingRight": 5,
  "iconWidth": 20,
  "iconColor": "#000000",
  "fontSize": 12,
  "mode": "push",
  "iconHeight": 20,
  "textDecoration": "none",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowSpread": 1,
  "paddingTop": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "shadow": false,
  "borderRadius": 0,
  "gap": 5,
  "fontFamily": "Arial",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "backgroundColorDirection": "vertical",
  "fontWeight": "normal",
  "rollOverIconColor": "#666666",
  "top": 10,
  "cursor": "hand",
  "visible": false,
  "borderColor": "#000000",
  "iconLineWidth": 5,
  "backgroundOpacity": 0.3,
  "id": "closeButtonPopupPanorama",
  "fontStyle": "normal",
  "data": {
   "name": "CloseButton15700"
  },
  "shadowColor": "#000000",
  "minWidth": 0,
  "fontColor": "#FFFFFF",
  "paddingBottom": 5,
  "iconBeforeLabel": true,
  "layout": "horizontal",
  "minHeight": 0,
  "label": "",
  "right": 10,
  "paddingLeft": 5,
  "class": "CloseButton"
 }
], 
 "start": "this.syncPlaylists([this.playList_8396762E_8C67_4897_41B0_64D4A12E8269,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "verticalAlign": "top",
 "borderSize": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "height": "100%",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "delayed",
 "paddingTop": 0,
 "gap": 10,
 "shadow": false,
 "borderRadius": 0,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "width": "100%",
 "scrollBarWidth": 10,
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getKey": function(key){  return window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "scrollBarMargin": 2,
 "layout": "absolute",
 "id": "rootPlayer",
 "data": {
  "name": "Player439"
 },
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "contentOpaque": false
})