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

const PageFoundation = () => {
  return (
    <Layout title="React Foundation Contact Sheet">
      <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <div className="button-basics-example">
        <Link>Learn More</Link>
        <Link>View All Features</Link>
        <Button color={Colors.SUCCESS}>Save</Button>
        <Button color={Colors.ALERT}>Delete</Button>
      </div>
      <div className="button-sizes-example">
        <Link size={Sizes.TINY}>So Tiny</Link>
        <Link size={Sizes.SMALL}>So Small</Link>
        <Link>So Basic</Link>
        <Link size={Sizes.LARGE}>So Large</Link>
        <Link isExpanded>Such Expand</Link>
        <Link size={Sizes.TINY} isExpanded>Wow, Small Expand</Link>
      </div>
      <div className="button-colors-example">
        <Link color={Colors.PRIMARY}>Primary Color</Link>
        <Link color={Colors.SECONDARY}>Secondary Color</Link>
        <Link color={Colors.SUCCESS}>Success Color</Link>
        <Link color={Colors.ALERT}>Alert Color</Link>
        <Link color={Colors.WARNING}>Warning Color</Link>
        <Link isDisabled>Disabled Button</Link>
      </div>
      <div className="button-hollow-example">
        <Button color={Colors.PRIMARY} isHollow>Primary Color</Button>
        <Button color={Colors.SECONDARY} isHollow>Secondary Color</Button>
        <Button color={Colors.SUCCESS} isHollow>Success Color</Button>
        <Button color={Colors.ALERT} isHollow>Alert Color</Button>
        <Button color={Colors.WARNING} isHollow>Warning Color</Button>
      </div>
      <div className="button-dropdown-arrows-example">
        <Button size={Sizes.TINY} isDropdown>Dropdown Button</Button>
        <Button size={Sizes.SMALL} isDropdown>Dropdown Button</Button>
        <Button isDropdown>Dropdown Button</Button>
        <Button size={Sizes.LARGE} isDropdown>Dropdown Button</Button>
        <Button isExpanded isDropdown>Dropdown Button</Button>
      </div>
      <div className="button-group-basics-example">
        <ButtonGroup>
          <Link>One</Link>
          <Link>Two</Link>
          <Link>Three</Link>
        </ButtonGroup>
      </div>
      <div className="button-group-sizes-example">
        <ButtonGroup size={Sizes.SMALL}>
          <Link>Small</Link>
          <Link>Button</Link>
          <Link>Group</Link>
        </ButtonGroup>
      </div>
      <div className="button-group-sizes-example">
        <ButtonGroup>
          <Link color={Colors.SECONDARY}>View</Link>
          <Link color={Colors.SUCCESS}>Edit</Link>
          <Link color={Colors.WARNING}>Share</Link>
          <Link color={Colors.ALERT}>Delete</Link>
        </ButtonGroup>
        <ButtonGroup color={Colors.SECONDARY}>
          <Link>Harder</Link>
          <Link>Better</Link>
          <Link>Faster</Link>
          <Link>Stronger</Link>
        </ButtonGroup>
      </div>
      <div className="button-group-expand-example">
        <ButtonGroup isExpanded>
          <Link>Expanded</Link>
          <Link>Button</Link>
          <Link>Group</Link>
        </ButtonGroup>
      </div>
      <div className="button-group-stack-example">
        <ButtonGroup stackFor={Breakpoints.SMALL}>
          <Link>How</Link>
          <Link>Low</Link>
          <Link>Can</Link>
          <Link>You</Link>
          <Link>Go</Link>
        </ButtonGroup>
      </div>
      <div className="button-group-split-button-example">
        <ButtonGroup>
          <Link>Primary Action</Link>
          <Link isDropdown isArrowOnly>
            <span className="show-for-sr">Show menu</span>
          </Link>
        </ButtonGroup>
      </div>
      <div className="switch-basics-example">
        <Switch/>
      </div>
      <div className="switch-radio-example">
        <Switch input={{ type: InputTypes.RADIO, name: 'testGroup', defaultChecked: true }}/>
        <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }}/>
        <Switch input={{ type: InputTypes.RADIO, name: 'testGroup' }}/>
      </div>
      <div className="switch-radio-example">
        <Switch size={Sizes.TINY}/>
        <Switch size={Sizes.SMALL}/>
        <Switch size={Sizes.LARGE}/>
      </div>
      <div className="switch-inner-label-example">
        <p>Do you like me?</p>
        <Switch size={Sizes.LARGE} active={{ text: 'Yes' }} inactive={{ text: 'No' }}/>
      </div>
      <div className="menu-basics-example">
        <Menu>
          <MenuItem><a>One</a></MenuItem>
          <MenuItem><a>Two</a></MenuItem>
          <MenuItem><a>Three</a></MenuItem>
          <MenuItem><a>Four</a></MenuItem>
        </Menu>
      </div>
      <div className="menu-item-alignment-example">
        <Menu alignment={Alignments.RIGHT}>
          <MenuItem><a>One</a></MenuItem>
          <MenuItem><a>Two</a></MenuItem>
          <MenuItem><a>Three</a></MenuItem>
          <MenuItem><a>Four</a></MenuItem>
        </Menu>
        <Menu alignment={Alignments.CENTER}>
          <MenuItem><a>One</a></MenuItem>
          <MenuItem><a>Two</a></MenuItem>
          <MenuItem><a>Three</a></MenuItem>
          <MenuItem><a>Four</a></MenuItem>
        </Menu>
        <Menu isExpanded>
          <MenuItem><a>One</a></MenuItem>
          <MenuItem><a>Two</a></MenuItem>
        </Menu>
        <Menu isExpanded>
          <MenuItem><a>One</a></MenuItem>
          <MenuItem><a>Two</a></MenuItem>
          <MenuItem><a>Three</a></MenuItem>
        </Menu>
        <Menu isExpanded>
          <MenuItem><a>One</a></MenuItem>
          <MenuItem><a>Two</a></MenuItem>
          <MenuItem><a>Three</a></MenuItem>
          <MenuItem><a>Four</a></MenuItem>
        </Menu>
      </div>
      <div className="menu-vertical-example">
        <Menu isVertical>
          <MenuItem><a>One</a></MenuItem>
          <MenuItem><a>Two</a></MenuItem>
          <MenuItem><a>Three</a></MenuItem>
          <MenuItem><a>Four</a></MenuItem>
        </Menu>
      </div>
      <div className="menu-simple-example">
        <Menu isSimple>
          <MenuItem><a>One</a></MenuItem>
          <MenuItem><a>Two</a></MenuItem>
          <MenuItem><a>Three</a></MenuItem>
          <MenuItem><a>Four</a></MenuItem>
        </Menu>
      </div>
      <div className="menu-nested-example">
        <Menu isVertical>
          <MenuItem>
            <a>One</a>
            <Menu isVertical isNested>
              <MenuItem><a>One</a></MenuItem>
              <MenuItem><a>Two</a></MenuItem>
              <MenuItem><a>Three</a></MenuItem>
              <MenuItem><a>Four</a></MenuItem>
            </Menu>
          </MenuItem>
          <MenuItem><a>Two</a></MenuItem>
          <MenuItem><a>Three</a></MenuItem>
          <MenuItem><a>Four</a></MenuItem>
        </Menu>
      </div>
      <div className="menu-active-state-example">
        <Menu>
          <MenuItem isActive><a>Home</a></MenuItem>
          <MenuItem><a>About</a></MenuItem>
          <MenuItem><a>Nachos</a></MenuItem>
        </Menu>
      </div>
      <div className="menu-active-state-example">
        <Menu>
          <MenuText>Site Title</MenuText>
          <MenuItem><a>One</a></MenuItem>
          <MenuItem><a>Two</a></MenuItem>
          <MenuItem><a>Three</a></MenuItem>
        </Menu>
      </div>
      <div className="menu-icons-example">
        <Menu>
          <MenuItem><a><Icon name="fi-list"/> <span>One</span></a></MenuItem>
          <MenuItem><a><Icon name="fi-list"/> <span>Two</span></a></MenuItem>
          <MenuItem><a><Icon name="fi-list"/> <span>Three</span></a></MenuItem>
          <MenuItem><a><Icon name="fi-list"/> <span>Four</span></a></MenuItem>
        </Menu>
        <Menu iconsOnTop>
          <MenuItem><a><Icon name="fi-list"/> <span>One</span></a></MenuItem>
          <MenuItem><a><Icon name="fi-list"/> <span>Two</span></a></MenuItem>
          <MenuItem><a><Icon name="fi-list"/> <span>Three</span></a></MenuItem>
          <MenuItem><a><Icon name="fi-list"/> <span>Four</span></a></MenuItem>
        </Menu>
      </div>
      <div className="pagination-basics-example">
        <Pagination aria-label="Pagination">
          <PaginationPrevious isDisabled>Previous <Inline showForSr>page</Inline></PaginationPrevious>
          <PaginationItem isCurrent><Inline showForSr>You're on page</Inline> 1</PaginationItem>
          <PaginationItem><a aria-label="Page 2">2</a></PaginationItem>
          <PaginationItem><a aria-label="Page 3">3</a></PaginationItem>
          <PaginationItem><a aria-label="Page 4">4</a></PaginationItem>
          <PaginationEllipsis/>
          <PaginationItem><a aria-label="Page 12">12</a></PaginationItem>
          <PaginationItem><a aria-label="Page 13">13</a></PaginationItem>
          <PaginationNext><a aria-label="Next page">Next <Inline showForSr>page</Inline></a></PaginationNext>
        </Pagination>
      </div>
      <div className="pagination-center-example">
        <Pagination aria-label="Pagination" isCentered>
          <PaginationPrevious isDisabled>Previous <Inline showForSr>page</Inline></PaginationPrevious>
          <PaginationItem isCurrent><Inline showForSr>You're on page</Inline> 1</PaginationItem>
          <PaginationItem><a aria-label="Page 2">2</a></PaginationItem>
          <PaginationItem><a aria-label="Page 3">3</a></PaginationItem>
          <PaginationItem><a aria-label="Page 4">4</a></PaginationItem>
          <PaginationEllipsis/>
          <PaginationItem><a aria-label="Page 12">12</a></PaginationItem>
          <PaginationItem><a aria-label="Page 13">13</a></PaginationItem>
          <PaginationNext><a aria-label="Next page">Next <Inline showForSr>page</Inline></a></PaginationNext>
        </Pagination>
      </div>
      <div className="breadcrumbs-example">
        <nav aria-label="You are here:" role="navigation">
          <Breadcrumbs>
            <BreadcrumbItem><a>Home</a></BreadcrumbItem>
            <BreadcrumbItem><a>Features</a></BreadcrumbItem>
            <BreadcrumbItem isDisabled>Gene Splicing</BreadcrumbItem>
            <BreadcrumbItem>
              <Inline showForSr>Current: </Inline> Cloning
            </BreadcrumbItem>
          </Breadcrumbs>
        </nav>
      </div>
      <div className="callout-basics-example">
        <Callout>
          <h5>This is a callout.</h5>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
          <a>It's dangerous to go alone, take this.</a>
        </Callout>
      </div>
      <div className="callout-colors-example">
        <Callout color={Colors.SECONDARY}>
          <h5>This is a secondary panel</h5>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
          <a href="#">It's dangerous to go alone, take this.</a>
        </Callout>
        <Callout color={Colors.PRIMARY}>
          <h5>This is a primary panel</h5>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
          <a href="#">It's dangerous to go alone, take this.</a>
        </Callout>
        <Callout color={Colors.SUCCESS}>
          <h5>This is a success panel</h5>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
          <a href="#">It's dangerous to go alone, take this.</a>
        </Callout>
        <Callout color={Colors.WARNING}>
          <h5>This is a warning panel</h5>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
          <a href="#">It's dangerous to go alone, take this.</a>
        </Callout>
        <Callout color={Colors.ALERT}>
          <h5>This is an alert panel</h5>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
          <a href="#">It's dangerous to go alone, take this.</a>
        </Callout>
      </div>
      <div className="callout-sizes-example">
        <Callout size={Sizes.SMALL}>
          <h5>This is a secondary panel</h5>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
          <a href="#">It's dangerous to go alone, take this.</a>
        </Callout>
        <Callout size={Sizes.LARGE}>
          <h5>This is a secondary panel</h5>
          <p>It has an easy to override visual style, and is appropriately subdued.</p>
          <a href="#">It's dangerous to go alone, take this.</a>
        </Callout>
      </div>
      <div className="media-object-basics-example">
        <MediaObject>
          <MediaObjectSection>
            <Thumbnail src="//unsplash.it/100"/>
          </MediaObjectSection>
          <MediaObjectSection isMain>
            <h4>Dreams feel real while we're in them.</h4>
            <p>I'm going to improvise. Listen, there's something you should know about me... about inception. An idea is like a virus, resilient, highly contagious. The smallest seed of an idea can grow. It can grow to define or destroy you.</p>
          </MediaObjectSection>
        </MediaObject>
      </div>
      <div className="media-object-section-alignment-example">
        <MediaObject>
          <MediaObjectSection isMiddle>
            <Thumbnail src="//unsplash.it/100"/>
          </MediaObjectSection>
          <MediaObjectSection isMain>
            <h4>Why is it so important to dream?</h4>
            <p>So, once we've made the plant, how do we go out? Hope you have something more elegant in mind than shooting me in the head? A kick. What's a kick? This, Ariadne, would be a kick.</p>
            <p>What is the most resilient parasite? Bacteria? A virus? An intestinal worm? An idea. Resilient... highly contagious. Once an idea has taken hold of the brain it's almost impossible to eradicate. An idea that is fully formed - fully understood - that sticks; right in there somewhere.</p>
          </MediaObjectSection>
          <MediaObjectSection isBottom>
            <Thumbnail src="//unsplash.it/100"/>
          </MediaObjectSection>
        </MediaObject>
      </div>
      <div className="media-object-stack-example">
        <MediaObject stackForSmall>
          <MediaObjectSection>
            <Thumbnail src="//unsplash.it/100"/>
          </MediaObjectSection>
          <MediaObjectSection>
            <h4>I Can Stack.</h4>
            <p>Shrink the browser width to see me stack. I do tricks for dog treats, but I'm not a dog.</p>
          </MediaObjectSection>
        </MediaObject>
      </div>
      <div className="badge-basics-example">
        <Badge>1</Badge>
      </div>
      <div className="badge-colors-example">
        <Badge color={Colors.SECONDARY}>2</Badge>
        <Badge color={Colors.SUCCESS}>3</Badge>
        <Badge color={Colors.ALERT}>A</Badge>
        <Badge color={Colors.WARNING}>B</Badge>
      </div>
      <div className="badge-icons-example">
        <Badge color={Colors.INFO}><Icon name="fi-share"/></Badge>
        <Badge color={Colors.SUCCESS}><Icon name="fi-check"/></Badge>
        <Badge color={Colors.WARNING}><Icon name="fi-wrench"/></Badge>
      </div>
      <div className="flex-video-example">
        <FlexVideo isWidescreen isVimeo>
          <iframe src="//player.vimeo.com/video/60122989" width="400" height="225" frameBorder="0" allowFullScreen/>
        </FlexVideo>
      </div>
      <div className="label-basics-example">
        <Label>Default Label</Label>
      </div>
      <div className="label-colors-example">
        <Label color={Colors.SECONDARY}>Secondary Label</Label>
        <Label color={Colors.SUCCESS}>Success Label</Label>
        <Label color={Colors.ALERT}>Alert Label</Label>
        <Label color={Colors.WARNING}>Warning Label</Label>
      </div>
      <div className="label-icons-example">
        <Label color={Colors.ALERT}><Icon name="fi-x-circle"/> Alert Label</Label>
        <Label color={Colors.WARNING}><Icon name="fi-x"/> Warning Label</Label>
        <Label color={Colors.INFO}><Icon name="fi-widget"/> Info Label</Label>
      </div>
      <div className="progress-basics-example">
        <Progress tabIndex="0" value={0}/>
        <Progress tabIndex="0" value={50}/>
      </div>
      <div className="progress-colors-example">
        <Progress color={Colors.SECONDARY} tabIndex="0" min={0} max={100} value={25} valueText="25 percent"/>
        <Progress color={Colors.SUCCESS} value={50}/>
        <Progress color={Colors.WARNING} value={50}/>
        <Progress color={Colors.ALERT} value={75}/>
      </div>
      <div className="progress-with-text-example">
        <Progress meter={{ text: '25%' }} tabIndex="0" min={0} max={100} value={25} valueText="25 percent"/>
      </div>
      <div className="native-progress-example">
        <NativeProgress max={100} value={75}/>
        <NativeProgress color={Colors.SECONDARY} max={100} value={75}/>
        <NativeProgress color={Colors.SUCCESS} max={100} value={75}/>
        <NativeProgress color={Colors.WARNING} max={100} value={75}/>
        <NativeProgress color={Colors.ALERT} max={100} value={75}/>
      </div>
      <Accordion>
        <AccordionItem>
          <AccordionTitle>Accordion 1</AccordionTitle>
          <AccordionContent>
            <p>
              First accordion contents
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle>Accordion 2</AccordionTitle>
          <AccordionContent>
            <p>
              Second accordion contents
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionTitle>Accordion 3</AccordionTitle>
          <AccordionContent>
            <p>
              Third accordion contents
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div>
        <Tabs>
          <TabItem isActive={true}>
            <a href="#panel1">First tab item</a>
          </TabItem>
          <TabItem>
            <a href="#panel2">Another tab item</a>
          </TabItem>
        </Tabs>
        <TabsContent>
          <TabPanel isActive={true} id="panel1">
            The content of the first panel
          </TabPanel>
          <TabPanel id="panel2">
            The content of the second panel
          </TabPanel>
        </TabsContent>
      </div>
      <div>
        <Reveal isLarge={true}>
          This is the content that would be revealed
        </Reveal>
        <Button>Reveal the content</Button>
      </div>
      <div className="grid-basics-example">
        <Grid className="display">
          <Cell small={2} large={4}>4 columns</Cell>
          <Cell small={4} large={4}>4 columns</Cell>
          <Cell small={6} large={4}>4 columns</Cell>
        </Grid>
        <Grid className="display">
          <Cell large={3}>3 columns</Cell>
          <Cell large={6}>6 columns</Cell>
          <Cell large={3}>3 columns</Cell>
        </Grid>
        <Grid className="display">
          <Cell small={6} large={2}>2 columns</Cell>
          <Cell small={6} large={8}>8 columns</Cell>
          <Cell small={12} large={2}>2 columns</Cell>
        </Grid>
        <Grid className="display">
          <Cell small={3}>3 columns</Cell>
          <Cell small={9}>9 columns</Cell>
        </Grid>
        <Grid className="display">
          <Cell large={4}>4 columns</Cell>
          <Cell large={8}>8 columns</Cell>
        </Grid>
        <Grid className="display">
          <Cell small={6} large={5}>5 columns</Cell>
          <Cell small={6} large={7}>7 columns</Cell>
        </Grid>
        <Grid className="display">
          <Cell large={6}>6 columns</Cell>
          <Cell large={6}>6 columns</Cell>
        </Grid>
      </div>
      <div className="grid-small-example">
        <Grid className="display">
          <Cell small={2}>2 columns</Cell>
          <Cell small={10}>10 columns</Cell>
        </Grid>
        <Grid className="display">
          <Cell small={3}>3 columns</Cell>
          <Cell small={9}>9 columns</Cell>
        </Grid>
      </div>
      <div className="grid-medium-example">
        <Grid className="display">
          <Cell medium={2}>2 columns</Cell>
          <Cell medium={10}>10 columns</Cell>
        </Grid>
        <Grid className="display">
          <Cell medium={3}>3 columns</Cell>
          <Cell medium={9}>9 columns</Cell>
        </Grid>
      </div>
      <div className="grid-column-row-example">
        <Grid className="display" isColumn>
          Row column
        </Grid>
      </div>
      <div className="grid-fluid-row-example">
        <Grid className="display" isExpanded>
        </Grid>
      </div>
      <div className="grid-nested-example">
        <Grid className="display">
          <Cell small={8}>8
            <Grid>
              <Cell small={8}>8 Nested
                <Grid>
                  <Cell small={8}>8 Nested Again</Cell>
                  <Cell small={4}>4</Cell>
                </Grid>
              </Cell>
              <Cell small={4}>4</Cell>
            </Grid>
          </Cell>
          <Cell small={4}>4</Cell>
        </Grid>
      </div>
      <div className="grid-offset-example">
        <Grid className="display">
          <Cell large={1}>1</Cell>
          <Cell large={11}>11</Cell>
        </Grid>
        <Grid className="display">
          <Cell large={1}>1</Cell>
          <Cell large={10} offsetOnLarge={1}>10, offset 1</Cell>
        </Grid>
        <Grid className="display">
          <Cell large={1}>1</Cell>
          <Cell large={9} offsetOnLarge={2}>9, offset 2</Cell>
        </Grid>
        <Grid className="display">
          <Cell large={1}>1</Cell>
          <Cell large={8} offsetOnLarge={3}>8, offset 3</Cell>
        </Grid>
      </div>
      <div className="grid-end-example">
        <Grid className="display-end">
          <Cell medium={3}>3</Cell>
          <Cell medium={3}>3</Cell>
          <Cell medium={3}>3</Cell>
        </Grid>
        <Grid className="display-end">
          <Cell medium={3}>3</Cell>
          <Cell medium={3}>3</Cell>
          <Cell medium={3} isLast>3 end</Cell>
        </Grid>
      </div>
      <div className="grid-collapse-example">
        <Grid>
          <Cell small={6}>
            <Callout color={Colors.SECONDARY}>
              <Block showOnlyFor={Breakpoints.SMALL}>On a small screen, I have gutters!</Block>
              <Block showOnlyFor={Breakpoints.MEDIUM}>On a medium screen, I have gutters!</Block>
              <Block showFor={Breakpoints.LARGE}>On a large screen, I have no gutters!</Block>
            </Callout>
          </Cell>
          <Cell small={6}>
            <Callout color={Colors.SECONDARY}>
              <Block showOnlyFor={Breakpoints.SMALL}>On a small screen, I have gutters!</Block>
              <Block showOnlyFor={Breakpoints.MEDIUM}>On a medium screen, I have gutters!</Block>
              <Block showFor={Breakpoints.LARGE}>On a large screen, I have no gutters!</Block>
            </Callout>
          </Cell>
        </Grid>
      </div>
      <div className="grid-center-example">
        <Grid className="display">
          <Cell small={3} centerOnSmall>3 centered</Cell>
        </Grid>
        <Grid className="display">
          <Cell small={6} centerOnLarge>6 centered, large</Cell>
        </Grid>
        <Grid className="display">
          <Cell small={9} centerOnSmall uncenterOnLarge>9 centered, small</Cell>
        </Grid>
        <Grid className="display">
          <Cell small={11} centerOnSmall>11 centered</Cell>
        </Grid>
      </div>
      <div className="grid-order-example">
        <Grid className="display">
          <Cell small={10} pushOnSmall={2}>10</Cell>
          <Cell small={2} pullOnSmall={10}>2, last</Cell>
        </Grid>
        <Grid className="display">
          <Cell large={9} pushOnLarge={3}>9</Cell>
          <Cell large={3} pullOnLarge={9}>3, last</Cell>
        </Grid>
        <Grid className="display">
          <Cell large={8} pushOnLarge={4}>8</Cell>
          <Cell large={4} pullOnLarge={8}>4, last</Cell>
        </Grid>
        <Grid className="display">
          <Cell small={5} pushOnSmall={7} medium={7} pushOnMedium={5}>7</Cell>
          <Cell small={7} pullOnSmall={5} medium={5} pullOnMedium={7}>5, last</Cell>
        </Grid>
        <Grid className="display">
          <Cell medium={6} pushOnMedium={6}>6</Cell>
          <Cell medium={6} pullOnMedium={6}>6, last</Cell>
        </Grid>
      </div>
      <div className="grid-block-example">
        <Grid upOnSmall={1} upOnMedium={2} upOnLarge={4}>
          <Cell isColumn>
            <Thumbnail src="//unsplash.it/300" alt=""/>
          </Cell>
          <Cell isColumn>
            <Thumbnail src="//unsplash.it/300" alt=""/>
          </Cell>
          <Cell isColumn>
            <Thumbnail src="//unsplash.it/300" alt=""/>
          </Cell>
          <Cell isColumn>
            <Thumbnail src="//unsplash.it/300" alt=""/>
          </Cell>
          <Cell isColumn>
            <Thumbnail src="//unsplash.it/300" alt=""/>
          </Cell>
          <Cell isColumn>
            <Thumbnail src="//unsplash.it/300" alt=""/>
          </Cell>
        </Grid>
      </div>
    </Layout>
  )
}

export default PageFoundation
