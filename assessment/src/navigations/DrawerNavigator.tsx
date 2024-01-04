import { createDrawerNavigator } from '@react-navigation/drawer';
import { UI_EXAM,NativeModuleExam } from "../screens";
import { SCREENS } from './navigation.constant';
const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="UI EXAM">
            <Drawer.Screen name={SCREENS.UI_EXAM} component={UI_EXAM} />
            <Drawer.Screen name={SCREENS.NATIVE_MODULE_EXAM} component={NativeModuleExam} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator