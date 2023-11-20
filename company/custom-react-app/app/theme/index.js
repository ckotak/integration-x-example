/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import {extendTheme} from 'custom-react-app/app/components/shared/ui'

// Foundational style overrides
import styles from 'custom-react-app/app/theme/foundations/styles'
import colors from 'custom-react-app/app/theme/foundations/colors'
import gradients from 'custom-react-app/app/theme/foundations/gradients'
import sizes from 'custom-react-app/app/theme/foundations/sizes'
import space from 'custom-react-app/app/theme/foundations/space'
import layerStyles from 'custom-react-app/app/theme/foundations/layerStyles'
import shadows from 'custom-react-app/app/theme/foundations/shadows'

// Base component style overrides
import Alert from 'custom-react-app/app/theme/components/base/alert'
import Accordion from 'custom-react-app/app/theme/components/base/accordion'
import Badge from 'custom-react-app/app/theme/components/base/badge'
import Button from 'custom-react-app/app/theme/components/base/button'
import Checkbox from 'custom-react-app/app/theme/components/base/checkbox'
import Container from 'custom-react-app/app/theme/components/base/container'
import Drawer from 'custom-react-app/app/theme/components/base/drawer'
import FormLabel from 'custom-react-app/app/theme/components/base/formLabel'
import Icon from 'custom-react-app/app/theme/components/base/icon'
import Input from 'custom-react-app/app/theme/components/base/input'
import Modal from 'custom-react-app/app/theme/components/base/modal'
import Radio from 'custom-react-app/app/theme/components/base/radio'
import Select from 'custom-react-app/app/theme/components/base/select'
import Skeleton from 'custom-react-app/app/theme/components/base/skeleton'
import Tooltip from 'custom-react-app/app/theme/components/base/tooltip'
import Popover from 'custom-react-app/app/theme/components/base/popover'

// Project Component style overrides
import App from 'custom-react-app/app/theme/components/project/_app'
import Breadcrumb from 'custom-react-app/app/theme/components/project/breadcrumb'
import Header from 'custom-react-app/app/theme/components/project/header'
import ListMenu from 'custom-react-app/app/theme/components/project/list-menu'
import Footer from 'custom-react-app/app/theme/components/project/footer'
import CheckoutFooter from 'custom-react-app/app/theme/components/project/checkout-footer'
import LinksList from 'custom-react-app/app/theme/components/project/links-list'
import DrawerMenu from 'custom-react-app/app/theme/components/project/drawer-menu'
import NestedAccordion from 'custom-react-app/app/theme/components/project/nested-accordion'
import LocaleSelector from 'custom-react-app/app/theme/components/project/locale-selector'
import OfflineBanner from 'custom-react-app/app/theme/components/project/offline-banner'
import Pagination from 'custom-react-app/app/theme/components/project/pagination'
import ProductTile from 'custom-react-app/app/theme/components/project/product-tile'
import SocialIcons from 'custom-react-app/app/theme/components/project/social-icons'
import SwatchGroup from 'custom-react-app/app/theme/components/project/swatch-group'
import ImageGallery from 'custom-react-app/app/theme/components/project/image-gallery'

// Please refer to the Chakra-Ui theme customization docs found
// here https://chakra-ui.com/docs/theming/customize-theme to learn
// more about extending and overriding themes for your project.
export const overrides = {
    styles,
    layerStyles,
    colors,
    sizes,
    space,
    gradients,
    shadows,
    components: {
        // base components
        Accordion,
        Alert,
        Badge,
        Button,
        Checkbox,
        Container,
        Drawer,
        FormLabel,
        Icon,
        Input,
        Modal,
        Popover,
        Radio,
        Select,
        Skeleton,
        Tooltip,

        // project components
        App,
        Breadcrumb,
        Header,
        Footer,
        CheckoutFooter,
        LinksList,
        ListMenu,
        DrawerMenu,
        NestedAccordion,
        LocaleSelector,
        OfflineBanner,
        SocialIcons,
        Pagination,
        ProductTile,
        SwatchGroup,
        ImageGallery
    }
}

export default extendTheme(overrides)
