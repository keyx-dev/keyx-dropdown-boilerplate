import AppDropdownMenuItem from "@/components/app-dropdown-menu-item";
import LucideCopyPlus from "@/components/lucide-copy-plus";
import LucideSquarePen from "@/components/lucide-square-pen";
import LucideGroup from "@/components/lucide-group";
import LucideCopy from "@/components/lucide-copy";
import AppDropdown from "@/components/app-dropdown";
import AppDropdownMenuItemWithShortcut from "@/components/app-dropdown-menu-item-with-shortcut";
import LucideTrash2 from "@/components/lucide-trash-2";
import LucideFlaskConical from "@/components/lucide-flask-conical";
import LucideSquareChevronRight from "@/components/lucide-square-chevron-right";
import LucideSun from "@/components/lucide-sun";
import LucideMoon from "@/components/lucide-moon";
import LucideMonitor from "@/components/lucide-monitor";
import LucideLogOut from "@/components/lucide-log-out";
import LucidePlus from "@/components/lucide-plus";
import TwoLineAppDropdownMenuItem from "@/components/two-line-app-dropdown-menu-item";
import LucideType from "@/components/lucide-type";
import LucideTextQuote from "@/components/lucide-text-quote";
import LucideMinus from "@/components/lucide-minus";
import LucideHeading1 from "@/components/lucide-heading-1";
import LucideHeading2 from "@/components/lucide-heading-2";
import "./page.scss";

export default async function SamplePage({ params, searchParams }) {
  undefined;

  return (
    <>
      <div className="samplePage_1_51">
        <AppDropdown
          content={
            <div className="menuWithIcons_1_59">
              <AppDropdownMenuItem
                hover={false}
                icon={<LucideCopyPlus className="lucideCopyPlus_i_1_78_1_67" />}
                text="Copy"
                className="appDropdown_1_78"
              />
              <AppDropdownMenuItem
                hover={false}
                icon={
                  <LucideSquarePen className="lucideSquarePen_i_1_82_1_67" />
                }
                text="Edit"
                className="appDropdown_1_82"
              />
              <AppDropdownMenuItem
                hover={false}
                icon={<LucideGroup className="lucideGroup_i_1_86_1_67" />}
                text="Group"
                className="appDropdown_1_86"
              />
              <AppDropdownMenuItem
                hover={false}
                icon={<LucideCopy className="lucideCopy_i_1_90_1_67" />}
                text="Clone"
                className="appDropdown_1_90"
              />
            </div>
          }
        >
          <div className="frame70_1_52">
            <div className="menu_1_53">
              <svg
                viewBox="0 0 13 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="vector_1_58"
              >
                <path
                  d="M1.16663 5H11.8333M1.16663 1H11.8333M1.16663 9H11.8333"
                  stroke="black"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </AppDropdown>

        <AppDropdown
          content={
            <div className="menuWithIcons_1_59">
              <AppDropdownMenuItem
                hover={false}
                icon={<LucideCopyPlus className="lucideCopyPlus_i_1_78_1_67" />}
                text="Copy"
                className="appDropdown_1_78"
              />
              <AppDropdownMenuItem
                hover={false}
                icon={
                  <LucideSquarePen className="lucideSquarePen_i_1_82_1_67" />
                }
                text="Edit"
                className="appDropdown_1_82"
              />
              <AppDropdownMenuItem
                hover={false}
                icon={<LucideGroup className="lucideGroup_i_1_86_1_67" />}
                text="Group"
                className="appDropdown_1_86"
              />
              <AppDropdownMenuItem
                hover={false}
                icon={<LucideCopy className="lucideCopy_i_1_90_1_67" />}
                text="Clone"
                className="appDropdown_1_90"
              />
            </div>
          }
          sameWidth={true}
        >
          <div className="frame71_13_137">
            <div className="sameWith_13_140">
              <span className="sameWithOfTrigger">Same with of trigger</span>
            </div>
          </div>
        </AppDropdown>

        <AppDropdown
          content={
            <div className="groupedMenuItems_14_141">
              <div className="frame73_14_177">
                <div className="frame75_14_193">
                  <div className="actions_14_191">
                    <span className="actions">Actions</span>
                  </div>
                </div>

                <AppDropdownMenuItemWithShortcut
                  hover={false}
                  icon={
                    <LucideCopyPlus className="lucideCopyPlus_i_14_142_14_198" />
                  }
                  text="Copy"
                  shortcutText="⌘C"
                  className="appDropdown_14_142"
                />
                <AppDropdownMenuItemWithShortcut
                  hover={false}
                  icon={
                    <LucideSquarePen className="lucideSquarePen_i_14_143_14_198" />
                  }
                  text="Edit"
                  shortcutText="⌘E"
                  className="appDropdown_14_143"
                />
                <AppDropdownMenuItemWithShortcut
                  hover={false}
                  icon={<LucideGroup className="lucideGroup_i_14_144_14_198" />}
                  text="Group"
                  shortcutText="⌘G"
                  className="appDropdown_14_144"
                />
              </div>

              <div className="frame72_14_174"></div>

              <div className="frame74_14_178">
                <div className="frame75_14_194">
                  <div className="label_14_195">
                    <span className="label">Label</span>
                  </div>
                </div>

                <AppDropdownMenuItemWithShortcut
                  hover={false}
                  icon={<LucideCopy className="lucideCopy_i_14_145_14_198" />}
                  text="Clone"
                  shortcutText="⌘D"
                  className="appDropdown_14_145"
                />
                <AppDropdownMenuItem
                  hover={false}
                  icon={<LucideTrash2 className="lucideTrash2_i_14_158_1_67" />}
                  text="Delete"
                  className="appDropdown_14_158"
                />
              </div>
            </div>
          }
        >
          <div className="frame72_14_175">
            <div className="groupedItems_14_176">
              <span className="groupedItemsW">Grouped Items /w labels</span>
            </div>
          </div>
        </AppDropdown>

        <AppDropdown
          content={
            <div className="userMenu_15_232">
              <div className="frame76_15_249">
                <div className="keithKennedy_15_250">
                  <span className="keithKennedy">Keith Kennedy</span>
                </div>

                <div className="kKennedyOriginuiCom_15_251">
                  <span className="kKennedyOriginuiC">
                    k.kennedy@originui.com
                  </span>
                </div>
              </div>

              <div className="frame77_15_252">
                <div className="frame78_15_253"></div>
              </div>

              <div className="frame79_15_255">
                <AppDropdownMenuItem
                  hover={false}
                  icon={
                    <LucideCopyPlus className="lucideCopyPlus_i_15_233_1_67" />
                  }
                  text="Account Preferences"
                  className="appDropdown_15_233"
                />
                <AppDropdownMenuItem
                  hover={false}
                  icon={
                    <LucideFlaskConical className="lucideFlaskConical_i_15_234_1_67" />
                  }
                  text="Feature Previews"
                  className="appDropdown_15_234"
                />
                <AppDropdownMenuItem
                  hover={false}
                  icon={
                    <LucideSquareChevronRight className="lucideSquareChevronRight_i_15_235_1_67" />
                  }
                  text="Command menu"
                  className="appDropdown_15_235"
                />
              </div>

              <div className="frame80_15_283">
                <div className="frame78_15_284"></div>
              </div>

              <div className="frame81_15_285">
                <div className="frame75_15_298">
                  <div className="theme_15_299">
                    <span className="theme">Theme</span>
                  </div>
                </div>

                <AppDropdownMenuItem
                  hover={false}
                  icon={<LucideSun className="lucideSun_i_15_286_1_67" />}
                  text="Light"
                  className="appDropdown_15_286"
                />
                <AppDropdownMenuItem
                  hover={false}
                  icon={<LucideMoon className="lucideMoon_i_15_287_1_67" />}
                  text="Dark"
                  className="appDropdown_15_287"
                />
                <AppDropdownMenuItem
                  hover={false}
                  icon={
                    <LucideMonitor className="lucideMonitor_i_15_288_1_67" />
                  }
                  text="Device"
                  className="appDropdown_15_288"
                />
              </div>

              <div className="frame82_15_317">
                <div className="frame78_15_318"></div>
              </div>

              <div className="frame83_15_319">
                <AppDropdownMenuItem
                  hover={false}
                  icon={<LucideLogOut className="lucideLogOut_i_15_322_1_67" />}
                  text="Logout"
                  className="appDropdown_15_322"
                />
              </div>
            </div>
          }
        >
          <div className="frame84_15_342"></div>
        </AppDropdown>

        <AppDropdown
          content={
            <div className="addBlockMenu_15_381">
              <div className="frame73_15_382">
                <div className="frame75_15_383">
                  <div className="addBlock_15_384">
                    <span className="addBlock">Add Block</span>
                  </div>
                </div>

                <TwoLineAppDropdownMenuItem
                  hover={false}
                  icon={<LucideType className="lucideType_i_15_386_15_419" />}
                  label="Text"
                  description="Start writing with plain text"
                  className="twoLine_15_386"
                />
                <TwoLineAppDropdownMenuItem
                  hover={false}
                  icon={
                    <LucideTextQuote className="lucideTextQuote_i_15_484_15_419" />
                  }
                  label="Quote"
                  description="Capture a quote"
                  className="twoLine_15_484"
                />
                <TwoLineAppDropdownMenuItem
                  hover={false}
                  icon={<LucideMinus className="lucideMinus_i_15_491_15_419" />}
                  label="Divider"
                  description="Visually divide blocks"
                  className="twoLine_15_491"
                />
                <TwoLineAppDropdownMenuItem
                  hover={false}
                  icon={
                    <LucideHeading1 className="lucideHeading1_i_15_498_15_419" />
                  }
                  label="Heading 1"
                  description="Big section heading"
                  className="twoLine_15_498"
                />
                <TwoLineAppDropdownMenuItem
                  hover={false}
                  icon={
                    <LucideHeading2 className="lucideHeading2_i_15_516_15_419" />
                  }
                  label="Heading 1"
                  description="Medium section sub heading"
                  className="twoLine_15_516"
                />
              </div>
            </div>
          }
        >
          <LucidePlus className="lucidePlus_15_379" />
        </AppDropdown>

        <AppDropdown
          content={
            <div className="themeSelectorMenu_15_529">
              <div className="frame81_15_541">
                <AppDropdownMenuItem
                  hover={false}
                  icon={<LucideSun className="lucideSun_i_15_544_1_67" />}
                  text="Light"
                  className="appDropdown_15_544"
                />
                <AppDropdownMenuItem
                  hover={false}
                  icon={<LucideMoon className="lucideMoon_i_15_545_1_67" />}
                  text="Dark"
                  className="appDropdown_15_545"
                />
                <AppDropdownMenuItem
                  hover={false}
                  icon={
                    <LucideMonitor className="lucideMonitor_i_15_546_1_67" />
                  }
                  text="Device"
                  className="appDropdown_15_546"
                />
              </div>
            </div>
          }
        >
          <div className="frame85_15_524">
            <LucideMoon className="lucideMoon_15_527" />
          </div>
        </AppDropdown>
      </div>
    </>
  );
}
