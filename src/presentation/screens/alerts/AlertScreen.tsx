import { Alert, Text, View } from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { globalStyles } from "../../../config/theme/theme";
import { Button } from "../../components/ui/Button";
import { showPrompt } from "../../../config/adapters/prompt.adapter";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";



export const AlertScreen = () => {

  const { isDark } = useContext( ThemeContext );

    const createTwoButtonAlert = () => {

        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {
          userInterfaceStyle: isDark ? 'dark' : 'light'
        },
      );
    };

    
      const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        ], {
            cancelable: true,
            onDismiss() {
                console.log('onDismiss');
            },
            userInterfaceStyle: isDark ? 'dark' : 'light'
        },
      );
    
        const onShowPromt = () => {

         showPrompt({
          title: 'Lorem Ipsum',
          subTitle:'Lorem ipsum dolor sit, amet consectetur.',
          buttons: [
            {text: 'OK', onPress: () => console.log('ok')},
            {text: 'Cancelar', onPress: () => console.log('cancelar')}
          ],
          placeholder: 'Placeholder',
         });
          

          //! Este es el codigo nativo que en Android no funciona
           /*  Alert.prompt(
                'Correo electronico',
                'Lorem ipsum dolor sit amet consectetur.',
                (valor: string) => console.log({valor}),
                'secure-text',
                'Soy el valor por defecto',
                'number-pad'
            ); */
        };

  return (
    <CustomView style={ globalStyles.globalMargin }>
        <Title safe text="Alertas"/>

        <Button 
            text="Alerta - 2 Botones"
            onPress={ createTwoButtonAlert }
        />
        
        <View style={{ height: 10 }}/>
        <Button 
            text="Alerta - 3 Botones"
            onPress={ createThreeButtonAlert }
        />

        <View style={{ height: 10 }}/>
        <Button 
            text="Prompt - Input"
            onPress={ onShowPromt }
        />

    </CustomView>
  )
}
