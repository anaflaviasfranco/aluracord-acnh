import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';

function GlobalStyle() {
    return (
        <style global jsx>{`
         @import url("https://use.typekit.net/enq8ehc.css");
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */ 
        
        `}

        </style>
    );
}

function Title(props){
    // console.log(props);
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx> {`
            ${Tag}{
                color: ${appConfig.theme.colors.acnh['400']};
                font-family: myriad-pro,sans-serif;
                font-weight: 700;
                font-style: normal;
                font-size: 32px;
            }
            `}</style>
        </>
    );
}

//componente react
// function HomePage() {
//     //JSX
//     return (

//         <div>
//             <GlobalStyle />
//             <Title tag="h2">Boas vindas de volta!</Title> 
//             <h2> Discord </h2>

//          </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
    const username = 'anaflaviasfranco';
  
    return (
      <>
        <GlobalStyle />
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            // backgroundColor: appConfig.theme.colors.acnh['050'],
            backgroundImage: 'url(https://i.pinimg.com/originals/b8/52/d3/b852d30263c12fc0be7517e882bc6163.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.acnh[300],
              backgroundImage: 'url(https://st3.depositphotos.com/4072575/i/600/depositphotos_158887112-stock-photo-high-resolution-natural-wood-grain.jpg)',
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Boas vindas de volta!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals['050'] }}>
                {appConfig.name}
              </Text>
  
              <TextField
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.acnh[400],
                    mainColorHighlight: appConfig.theme.colors.acnh[400],
                    backgroundColor: appConfig.theme.colors.neutrals['050'],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  // contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.acnh['050'],
                  mainColorLight: appConfig.theme.colors.acnh['050'],
                  mainColorStrong: appConfig.theme.colors.acnh['050'],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                // backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '5px solid',
                borderColor: appConfig.theme.colors.acnh[400],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals['050'],
                  backgroundColor: appConfig.theme.colors.acnh[400],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }