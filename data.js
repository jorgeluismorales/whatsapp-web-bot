const data = {
  root: {
    type: "menu",
    messages: [
      { type: "text", data: "👋 Hola, soy un bot!" },
      {
        type: "text",
        data: "*¿Qué te gustaría comer hoy?* 👇"
      }
    ],
    childrens: {
      a: {
        type: "submenu",
        title: "Helados",
        messages: [
          { type: "text", data: "*¿Sobre qué local deseas información?*" }
        ],
        childrens: {
          a: {
            type: "data",
            title: "Heladería Grido",
            messages: [
              {
                type: "text",
                data:
                  "*Heladería Grido*\n*Dirección*: Calle Falsa 123\n*Teléfono*: 0380 422-2222"
              }
            ]
          },
          b: {
            type: "data",
            title: "Heladería Las Malvinas",
            messages: [
              {
                type: "text",
                data:
                  "*Heladería Las Malvinas*\n*Dirección*: Calle Falsa 123\n*Teléfono*: 0380 422-2222"
              }
            ]
          },
          c: {
            type: "data",
            title: "Heladería YO",
            messages: [
              {
                type: "text",
                data:
                  "*Heladería YO*\n*Dirección*: Calle Falsa 123\n*Teléfono*: 0380 422-2222"
              }
            ]
          }
        }
      },
      b: {
        type: "submenu",
        title: "Rotiserías",
        messages: [
          {
            type: "text",
            data: "*¿Sobre qué local deseas información?*"
          }
        ],
        childrens: {
          a: {
            type: "data",
            title: "El Terebinto",
            messages: [
              {
                type: "text",
                data:
                  "*El Terebinto*\n*Dirección*: Calle Falsa 123\n*Teléfono*: 0380 422-2222"
              }
            ]
          },
          b: {
            type: "data",
            title: "Mayonesa",
            messages: [
              {
                type: "text",
                data:
                  "*Mayonesa*\n*Dirección*: Calle Falsa 123\n*Teléfono*: 0380 422-2222"
              }
            ]
          },
          c: {
            type: "data",
            title: "Ric-Ros",
            messages: [
              {
                type: "text",
                data:
                  "*Ric-Ros*\n*Dirección*: Calle Falsa 123\n*Teléfono*: 0380 422-2222"
              }
            ]
          }
        }
      },
      c: {
        type: "submenu",
        title: "Pizzerias",
        messages: [
          {
            type: "text",
            data: "*¿Sobre qué local deseas información?*"
          }
        ],
        childrens: {
          a: {
            type: "data",
            title: "Family",
            messages: [
              {
                type: "text",
                data:
                  "*Family*\n*Dirección*: Calle Falsa 123\n*Teléfono*: 0380 422-2222"
              }
            ]
          }
        }
      },
      d: {
        type: "submenu",
        title: "Empanadas",
        messages: [
          {
            type: "text",
            data: "*¿Sobre qué local deseas información?*"
          }
        ],
        childrens: {
          a: {
            type: "data",
            title: "Habibi",
            messages: [
              {
                type: "text",
                data:
                  "*Habibi*\n*Dirección*: Calle Falsa 123\n*Teléfono*: 0380 422-2222"
              }
            ]
          },
          b: {
            type: "data",
            title: "Lo de Jacinto",
            messages: [
              {
                type: "text",
                data:
                  "*Lo de Jacinto*\n*Dirección*: Calle Falsa 123\n*Teléfono*: 0380 422-2222"
              }
            ]
          }
        }
      }
    }
  }
};

module.exports = data;
