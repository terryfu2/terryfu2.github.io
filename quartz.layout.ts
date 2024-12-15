import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/terryfu2",
      
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    //Component.Darkmode(),
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    //Component.ContentMeta(),
    Component.TagList(),

  ],
  left: [
    //Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    //Component.Search(),
    //Component.Darkmode(),
    
  ],
  right: [
    //Component.Graph(),
    //Component.DesktopOnly(Component.TableOfContents()),
    //Component.Backlinks(),
    Component.Darkmode(),
    //Component.DesktopOnly(Component.Explorer()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    //Component.PageTitle(),
    //Component.MobileOnly(Component.Spacer()),
    //Component.Search(),
    //Component.Darkmode(),
    //Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Darkmode(),
    //Component.DesktopOnly(Component.Explorer()),
  ],
}
