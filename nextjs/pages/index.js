import Layout from '../components/layout'

import { Accordion, AccordionItem, AccordionTitle, AccordionContent } from 'react-foundation';
import { Badge } from 'react-foundation';
import { Breadcrumbs, BreadcrumbItem } from 'react-foundation';
import { Button, Link } from 'react-foundation';
import { ButtonGroup } from 'react-foundation';
import { Callout } from 'react-foundation';
import { CloseButton } from 'react-foundation';
import { Reveal } from 'react-foundation';
import { FlexVideo } from 'react-foundation';
import { Block, Inline } from 'react-foundation';
import { Icon } from 'react-foundation';
import { Label } from 'react-foundation';
import { MediaObject, MediaObjectSection } from 'react-foundation';
import { Menu, MenuItem, MenuText } from 'react-foundation';
import { Pagination, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis } from 'react-foundation';
import { Progress, ProgressMeter, ProgressMeterWithText, ProgressMeterText, NativeProgress } from 'react-foundation';
import { ResponsiveNavigation, TitleBar, MenuIcon, TitleBarTitle } from 'react-foundation';
import { Switch, SwitchInput, SwitchPaddle, SwitchActive, SwitchInactive } from 'react-foundation';
import { Thumbnail, ThumbnailLink } from 'react-foundation';
import { Tabs, TabItem, TabsContent, TabPanel } from 'react-foundation';
import { TopBar, TopBarTitle, TopBarLeft, TopBarRight } from 'react-foundation';
import { GridContainer, Grid, Cell } from 'react-foundation';
import { Breakpoints, Colors, Sizes, Alignments, FloatTypes, InputTypes, GutterTypes, ExtendedBreakpoints, SpaceControls } from 'react-foundation';

const PageHome = () => {
    return (
        <Layout title="Next.js">
            <h1 className="title">
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>
        </Layout>
    )
}

export default PageHome
