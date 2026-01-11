
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";


//import "./index.css";
//import "./flags.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import AutoComplete from 'primevue/autocomplete';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import BadgeDirective from "primevue/badgedirective";
import BlockUI from 'primevue/blockui';
import Button from 'primevue/button';
import Breadcrumb from 'primevue/breadcrumb';
import Calendar from 'primevue/calendar';
import Card from 'primevue/card';
import CascadeSelect from 'primevue/cascadeselect';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import Chip from 'primevue/chip';
import Chips from 'primevue/chips';
import ColorPicker from 'primevue/colorpicker';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';
import ContextMenu from 'primevue/contextmenu';
import DataTable from 'primevue/datatable';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import DeferredContent from 'primevue/deferredcontent';
import Dialog from 'primevue/dialog';
import DialogService from 'primevue/dialogservice'
import Divider from 'primevue/divider';
import Dock from 'primevue/dock';
import Dropdown from 'primevue/dropdown';
import DynamicDialog from 'primevue/dynamicdialog';
import Fieldset from 'primevue/fieldset';
import FileUpload from 'primevue/fileupload';
import FocusTrap from 'primevue/focustrap';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import InlineMessage from 'primevue/inlinemessage';
import Inplace from 'primevue/inplace';
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import InputNumber from 'primevue/inputnumber';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import MegaMenu from 'primevue/megamenu';
import Menu from 'primevue/menu';
import Menubar from 'primevue/menubar';
import Message from 'primevue/message';
import MultiSelect from 'primevue/multiselect';
import OrderList from 'primevue/orderlist';
import OrganizationChart from 'primevue/organizationchart';
import OverlayPanel from 'primevue/overlaypanel';
import Paginator from 'primevue/paginator';
import Panel from 'primevue/panel';
import PanelMenu from 'primevue/panelmenu';
import Password from 'primevue/password';
import PickList from 'primevue/picklist';
import ProgressBar from 'primevue/progressbar';
import ProgressSpinner from 'primevue/progressspinner';
import Rating from 'primevue/rating';
import RadioButton from 'primevue/radiobutton';
import Ripple from 'primevue/ripple';
import Row from 'primevue/row';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel';
import ScrollTop from 'primevue/scrolltop';
import Skeleton from 'primevue/skeleton';
import Slider from 'primevue/slider';
import Sidebar from 'primevue/sidebar';
import SpeedDial from 'primevue/speeddial';
import SplitButton from 'primevue/splitbutton';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Steps from 'primevue/steps';
import StyleClass from 'primevue/styleclass';
import TabMenu from 'primevue/tabmenu';
import TieredMenu from 'primevue/tieredmenu';
import Textarea from 'primevue/textarea';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Toolbar from 'primevue/toolbar';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Tag from 'primevue/tag';
import Terminal from 'primevue/terminal';
import Timeline from 'primevue/timeline';
import ToggleButton from 'primevue/togglebutton';
import Tooltip from 'primevue/tooltip';
import Tree from 'primevue/tree';
import TreeSelect from 'primevue/treeselect';
import TreeTable from 'primevue/treetable';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import VirtualScroller from 'primevue/virtualscroller';
import moment from 'moment';
import 'vuetify/styles'
import vuetify from './plugins/vuetify'
import store from "./store";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// $$$$$$$$$$  LIVE CONFIG  $$$$$$$$$$
const firebaseConfig = {
    apiKey: "AIzaSyDf7NMpHHljYBM6otEvnKonsAppFB8nRhU",
    authDomain: "bagage-locker.firebaseapp.com",
    projectId: "bagage-locker",
    storageBucket: "bagage-locker.appspot.com",
    messagingSenderId: "824723542749",
    appId: "1:824723542749:web:1e5ef483f81e97d06b0134",
    measurementId: "G-2GCHRMN7G5"
};
// $$$$$$$$$$  TEST CONFIG  $$$$$$$$$$
/*const firebaseConfig = {
    apiKey: "AIzaSyCdJb2Qa2Zes9NWI537UwQEFHNBJuTXrUA",
    authDomain: "bagagelocker-test.firebaseapp.com",
    projectId: "bagagelocker-test",
    storageBucket: "bagagelocker-test.appspot.com",
    messagingSenderId: "87092830465",
    appId: "1:87092830465:web:a27b3dd1f3dd0d9f3b7b00",
    measurementId: "G-H0505YTLYE"
  };*/
// Initialize Firebase
const app = createApp(App);
app.provide('baseURL', process.env.VUE_APP_BAGAGE_LOCKER_REST_API_URL)
app.use(initializeApp(firebaseConfig))
app.use(vuetify)
app.use(PrimeVue, { ripple: true });
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);

import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_BAGAGE_LOCKER_REST_API_URL//'https://bagagelocker-api.onrender.com/api/v1';// 'http://localhost:8080/api/v1'
//app.config.globalProperties.$axios = axios; 
/*
// STORE VUEX
const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
*/
app.use(store)
// STORE VUEX // STORE VUEX
app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('focustrap', FocusTrap);

app.component('AccordionComponent', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('AutoComplete', AutoComplete);
app.component('AvatarComponent', Avatar);
app.component('AvatarGroup', AvatarGroup);
app.component('BadgeComponent', Badge);
app.component('BlockUI', BlockUI);
app.component('BreadcrumbComponent', Breadcrumb);
app.component('ButtonComponent', Button);
app.component('CalendarComponent', Calendar);
app.component('CardComponent', Card);
app.component('CarouselComponent', Carousel);
app.component('CascadeSelect', CascadeSelect);
app.component('CheckBox', Checkbox);
app.component('ChipComponent', Chip);
app.component('ChipsComponent', Chips);
app.component('ColorPicker', ColorPicker);
app.component('ColumnComponent', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('ConfirmDialog', ConfirmDialog);
app.component('ConfirmPopup', ConfirmPopup);
app.component('ContextMenu', ContextMenu);
app.component('DataTable', DataTable);
app.component('DataView', DataView);
app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('DeferredContent', DeferredContent);
app.component('DialogComponent', Dialog);
app.component('DividerComponent', Divider);
app.component('DockComponent', Dock);
app.component('DropdownComponent', Dropdown);
app.component('DynamicDialog', DynamicDialog);
app.component('FieldsetComponent', Fieldset);
app.component('FileUpload', FileUpload);
app.component('GalleriaComponent', Galleria);
app.component('ImageComponent', Image);
app.component('InlineMessage', InlineMessage);
app.component('InplaceComponent', Inplace);
app.component('InputMask', InputMask);
app.component('InputNumber', InputNumber);
app.component('InputSwitch', InputSwitch);
app.component('InputText', InputText);
app.component('KnobComponent', Knob);
app.component('ListboxComponent', Listbox);
app.component('MegaMenu', MegaMenu);
app.component('MenuComponent', Menu);
app.component('MenuBar', Menubar);
app.component('MessageComponent', Message);
app.component('MultiSelect', MultiSelect);
app.component('OrderList', OrderList);
app.component('OrganizationChart', OrganizationChart);
app.component('OverlayPanel', OverlayPanel);
app.component('PaginatorComponent', Paginator);
app.component('PanelComponent', Panel);
app.component('PanelMenu', PanelMenu);
app.component('PasswordComponent', Password);
app.component('PickList', PickList);
app.component('ProgressBar', ProgressBar);
app.component('ProgressSpinner', ProgressSpinner);
app.component('RadioButton', RadioButton);
app.component('RatingComponent', Rating);
app.component('RowComponent', Row);
app.component('SelectButton', SelectButton);
app.component('ScrollPanel', ScrollPanel);
app.component('ScrollTop', ScrollTop);
app.component('SliderComponent', Slider);
app.component('SidebarComponent', Sidebar);
app.component('SkeletonComponent', Skeleton);
app.component('SpeedDial', SpeedDial);
app.component('SplitButton', SplitButton);
app.component('SplitterComponent', Splitter);
app.component('SplitterPanel', SplitterPanel);
app.component('StepsComponent', Steps);
app.component('TabMenu', TabMenu);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('TagComponent', Tag);
app.component('TextareaComponent', Textarea);
app.component('TerminalComponent', Terminal);
app.component('TieredMenu', TieredMenu);
app.component('TimelineComponent', Timeline);
app.component('ToastComponent', Toast);
app.component('ToolbarComponent', Toolbar);
app.component('ToggleButton', ToggleButton);
app.component('TreeComponent', Tree);
app.component('TreeSelect', TreeSelect);
app.component('TreeTable', TreeTable);
app.component('TriStateCheckbox', TriStateCheckbox);
app.component('VirtualScroller', VirtualScroller);

app.config.globalProperties.$filters = {
    formatDateSlash(value) {
        if (value) {
            return moment(String(value)).format('DD/MM/YYYY')
        }
    }
};

app.mount("#app");
