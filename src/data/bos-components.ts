import type { NetworkId } from '@/utils/types';

type NetworkComponents = {
  blogPage: string;
  blogsPage: string;
  bosDirectory: string;
  componentSummary: string;
  componentsPage: string;
  default: string;
  editorComponentSearch: string;
  horizon: {
    homePage: string;
    appPage: string;
  };
  image: string;
  nearOrg: {
    ecosystemCommunityPage: string;
    ecosystemGetFundingPage: string;
    ecosystemOverviewPage: string;
    ecosystemWorkAndEarnPage: string;
    homePage: string;
    usePage: string;
  };
  notificationButton: string;
  notificationsPage: string;
  peoplePage: string;
  profileImage: string;
  profileInlineBlock: string;
  profileName: string;
  profilePage: string;
  search: {
    indexPage: string;
    typeAheadDropdown: string;
  };
  tosCheck: string;
  tosContent: string;
  viewSource: string;
  widgetMetadata: string;
  widgetMetadataEditor: string;
  wrapper: string;
  writePostButton: string;
  writePostPage: string;
};

export const componentsByNetworkId: Record<NetworkId, NetworkComponents | undefined> = {
  // localnet: undefined,
  testnet: {
    blogPage: 'openwebbuild.testnet/widget/Page.Post',
    blogsPage: 'openwebbuild.testnet/widget/Page.Posts',
    bosDirectory: 'one.testnet/widget/BOSDirectory',
    componentSummary: 'one.testnet/widget/ComponentSummary',
    componentsPage: 'one.testnet/widget/ComponentsPage',
    default: 'openwebbuild.testnet/widget/Page.Explore',
    editorComponentSearch: 'one.testnet/widget/Editor.ComponentSearch',
    horizon: {
      homePage: 'nearhorizon.near/widget/HomePage',
      appPage: 'nearhorizon.near/widget/Index',
    },
    image: 'eugenethedream/widget/Image',
    nearOrg: {
      ecosystemCommunityPage: 'discom.testnet/widget/NearOrg.Ecosystem.CommunityPage',
      ecosystemGetFundingPage: 'discom.testnet/widget/NearOrg.Ecosystem.GetFundingPage',
      ecosystemOverviewPage: 'discom.testnet/widget/NearOrg.Ecosystem.OverviewPage',
      ecosystemWorkAndEarnPage: 'discom.testnet/widget/NearOrg.Ecosystem.WorkAndEarnPage',
      homePage: 'discom.testnet/widget/NearOrg.HomePage',
      usePage: 'discom.testnet/widget/NearOrg.UsePage',
    },
    notificationButton: 'one.testnet/widget/NotificationButton',
    notificationsPage: 'one.testnet/widget/NotificationsPage',
    peoplePage: 'one.testnet/widget/PeoplePage',
    profileImage: 'eugenethedream/widget/ProfileImage',
    profileInlineBlock: 'eugenethedream/widget/Profile.InlineBlock',
    profileName: 'eugenethedream/widget/ProfileName',
    profilePage: 'openwebbuild.testnet/widget/Page.Profile',
    search: {
      indexPage: 'one.testnet/widget/Search.IndexPage',
      typeAheadDropdown: 'one.testnet/widget/Search.TypeAheadDropdown',
    },
    tosCheck: 'one.testnet/widget/TosCheck',
    tosContent: 'one.testnet/widget/TosContent',
    viewSource: 'eugenethedream/widget/WidgetSource',
    widgetMetadata: 'eugenethedream/widget/WidgetMetadata',
    widgetMetadataEditor: 'eugenethedream/widget/WidgetMetadataEditor',
    wrapper: 'one.testnet/widget/DIG.Theme',
    writePostButton: 'openwebbuild.testnet/widget/Post.WriteButton',
    writePostPage: 'openwebbuild.testnet/widget/Post.Editor',
  },

  mainnet: {
    blogPage: 'openwebbuild.near/widget/Page.Post',
    blogsPage: 'openwebbuild.near/widget/Page.Posts',
    bosDirectory: 'onboarder.near/widget/BOSDirectory',
    componentSummary: 'near/widget/ComponentSummary',
    componentsPage: 'near/widget/ComponentsPage',
    default: 'openwebbuild.near/widget/Page.Explore',
    editorComponentSearch: 'mob.near/widget/Editor.ComponentSearch',
    horizon: {
      homePage: 'nearhorizon.near/widget/HomePage',
      appPage: 'nearhorizon.near/widget/Index',
    },
    image: 'mob.near/widget/Image',
    nearOrg: {
      ecosystemCommunityPage: 'near/widget/NearOrg.Ecosystem.CommunityPage',
      ecosystemGetFundingPage: 'near/widget/NearOrg.Ecosystem.GetFundingPage',
      ecosystemOverviewPage: 'near/widget/NearOrg.Ecosystem.OverviewPage',
      ecosystemWorkAndEarnPage: 'near/widget/NearOrg.Ecosystem.WorkAndEarnPage',
      homePage: 'near/widget/NearOrg.HomePage',
      usePage: 'near/widget/NearOrg.UsePage',
    },
    notificationButton: 'near/widget/NotificationButton',
    notificationsPage: 'near/widget/NotificationsPage',
    peoplePage: 'near/widget/PeoplePage',
    profileImage: 'mob.near/widget/ProfileImage',
    profileInlineBlock: 'mob.near/widget/Profile.InlineBlock',
    profileName: 'patrick.near/widget/ProfileName',
    profilePage: 'openwebbuild.near/widget/Page.Profile',
    search: {
      indexPage: 'near/widget/Search.IndexPage',
      typeAheadDropdown: 'near/widget/Search.TypeAheadDropdown',
    },
    tosCheck: 'near/widget/TosCheck',
    tosContent: 'adminalpha.near/widget/TosContent',
    viewSource: 'mob.near/widget/WidgetSource',
    widgetMetadata: 'mob.near/widget/WidgetMetadata',
    widgetMetadataEditor: 'near/widget/WidgetMetadataEditor',
    wrapper: 'near/widget/DIG.Theme',
    writePostButton: 'openwebbuild.near/widget/Post.WriteButton',
    writePostPage: 'openwebbuild.near/widget/Post.Editor',
  },
};
