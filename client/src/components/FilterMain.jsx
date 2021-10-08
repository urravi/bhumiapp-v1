import React from 'react';

function FilterMain() {
  return (
    <div>
      <div className="filter-section">
        <div className="filters optionsblock">
          <div className="optionsdata line clearfix">
            <form id="filters-form">
              <div className="col-md-8 filters-group">
                {/* <!-- Regular filters on the left side --> */}
                <div>
                  <div className="filters-list-wrapper">
                    <div className="page-label"> Filters</div>
                    <ul className="grouplist clearfix">
                      <li className="item " data-group="price">
                        <div className="gname title">
                          Price
                          <div className="caret"></div>
                        </div>
                        <div className="filter-content dropdown-content" >
                          <div className="dropdown-wrapper">
                            <div className="data arrow_box ulscrollable">
                              <ul className="filters-list">
                                <li className="range-filter" data-filter-name="price" data-group="price">
                                  <div className="filter-item">
                                    <div className="filter-header">
                                      <span className="filter-name">Price</span>
                                      <span className="clear hide range-filter-clear">
                                        Clear
                                      </span>
                                    </div>
                                    <div className="filter-data range-slider-container">
                                      <div className="min-max-values clearfix">
                                        <span className="range-min">₹14,499</span>
                                        <span className="range-max">₹1,13,999</span>
                                      </div>
                                      <div className="range-slider noUi-target noUi-ltr noUi-horizontal noUi-background"
                                        data-max="113999" data-min="14499" data-selected-max="113999"
                                        data-selected-min="14499">
                                        <input type="hidden" name="filters[price][min]" id="filters_price_min"
                                          value="14499" className="min" disabled="disabled" />
                                        <input type="hidden" name="filters[price][max]" id="filters_price_max"
                                          value="113999" className="max" disabled="disabled" />
                                        <div className="noUi-base">
                                          <div className="noUi-origin">
                                            {/* style="left: 0%;" */}
                                            <div className="noUi-handle noUi-handle-lower"></div>
                                          </div>
                                          <div className="noUi-origin" >
                                            {/* style="left: 100%;" */}
                                            <div className="noUi-handle noUi-handle-upper"></div>
                                          </div>
                                          <div className="connect" >
                                            {/* style="left: 0%; right: 0%;" */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li className="row range-limits">
                                  <div className="col-md-6">
                                    <label className="range">
                                      <input type="radio" name="price_limit" id="price_limit_11999-14498"
                                        value="11999-14498" className="radio" />
                                      ₹11,999-₹14,498
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="range">
                                      <input type="radio" name="price_limit" id="price_limit_14499-17998"
                                        value="14499-17998" className="radio" />
                                      ₹14,499-₹17,998
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="range">
                                      <input type="radio" name="price_limit" id="price_limit_17999-22998"
                                        value="17999-22998" className="radio" />
                                      ₹17,999-₹22,998
                                    </label>
                                  </div>
                                  <div className="col-md-6">
                                    <label className="range">
                                      <input type="radio" name="price_limit" id="price_limit_22999-113999"
                                        value="22999-113999" className="radio" />
                                      ₹22,999-₹113,999
                                    </label>
                                  </div>
                                </li>

                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item " data-group="finish">
                        <div className="gname title">
                          Finish
                          <div className="caret"></div>
                        </div>
                        <div className="filter-content dropdown-content" >
                          {/* style="display: none;" */}
                          <div className="dropdown-wrapper">
                            <div className="data arrow_box ulscrollable">
                              <div className="clearfix filter" data-filter-name="primary_finishes" data-group="finish">
                                <div className="filter-header">
                                  <span className="filter-name">Basic Finish</span>
                                  <span className="clear filter-clear hide">
                                    Clear
                                  </span>
                                </div>
                                <ul className="clearfix options" data-filter-name="primary_finishes">
                                  <li className="option " data-option-key="Semi_Gloss" data-option-name="Semi Gloss">
                                    <input type="checkbox" name="filters[primary_finishes][]"
                                      id="filters_primary_finishes_Semi_Gloss" value="Semi Gloss" />
                                    <label className="name " for="filters_primary_finishes_Semi_Gloss">Semi Gloss
                                    </label>
                                  </li>
                                  <li className="option " data-option-key="Medium" data-option-name="Medium">
                                    <input type="checkbox" name="filters[primary_finishes][]"
                                      id="filters_primary_finishes_Medium" value="Medium" />
                                    <label className="name " for="filters_primary_finishes_Medium">Medium
                                    </label>
                                  </li>
                                  <li className="option " data-option-key="Dark" data-option-name="Dark">
                                    <input type="checkbox" name="filters[primary_finishes][]"
                                      id="filters_primary_finishes_Dark" value="Dark" />
                                    <label className="name " for="filters_primary_finishes_Dark">Dark
                                    </label>
                                  </li>
                                  <li className="option " data-option-key="matte" data-option-name="matte">
                                    <input type="checkbox" name="filters[primary_finishes][]"
                                      id="filters_primary_finishes_matte" value="matte" />
                                    <label className="name " for="filters_primary_finishes_matte">matte
                                    </label>
                                  </li>
                                  <li className="option " data-option-key="amber_walnut" data-option-name="amber walnut">
                                    <input type="checkbox" name="filters[primary_finishes][]"
                                      id="filters_primary_finishes_amber_walnut" value="amber walnut" />
                                    <label className="name " for="filters_primary_finishes_amber_walnut">amber walnut
                                    </label>
                                  </li>
                                  <li className="option " data-option-key="distressed" data-option-name="distressed">
                                    <input type="checkbox" name="filters[primary_finishes][]"
                                      id="filters_primary_finishes_distressed" value="distressed" />
                                    <label className="name " for="filters_primary_finishes_distressed">distressed
                                    </label>
                                  </li>
                                  <li className="option " data-option-key="Light" data-option-name="Light">
                                    <input type="checkbox" name="filters[primary_finishes][]"
                                      id="filters_primary_finishes_Light" value="Light" />
                                    <label className="name " for="filters_primary_finishes_Light">Light
                                    </label>
                                  </li>
                                  <li className="option " data-option-key="columbian_walnut"
                                    data-option-name="columbian walnut">
                                    <input type="checkbox" name="filters[primary_finishes][]"
                                      id="filters_primary_finishes_columbian_walnut" value="columbian walnut" />
                                    <label className="name " for="filters_primary_finishes_columbian_walnut">columbian
                                      walnut
                                    </label>
                                  </li>
                                  <li className="option " data-option-key="mango_mahogany"
                                    data-option-name="mango mahogany">
                                    <input type="checkbox" name="filters[primary_finishes][]"
                                      id="filters_primary_finishes_mango_mahogany" value="mango mahogany" />
                                    <label className="name " for="filters_primary_finishes_mango_mahogany">mango mahogany
                                    </label>
                                  </li>
                                  <li className="option " data-option-key="mango_walnut" data-option-name="mango walnut">
                                    <input type="checkbox" name="filters[primary_finishes][]"
                                      id="filters_primary_finishes_mango_walnut" value="mango walnut" />
                                    <label className="name " for="filters_primary_finishes_mango_walnut">mango walnut
                                    </label>
                                  </li>
                                  <li className="option " data-option-key="sonoma_oak" data-option-name="sonoma oak">
                                    <input type="checkbox" name="filters[primary_finishes][]"
                                      id="filters_primary_finishes_sonoma_oak" value="sonoma oak" />
                                    <label className="name " for="filters_primary_finishes_sonoma_oak">sonoma oak
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item " data-group="material">
                        <div className="gname title">
                          Material
                          <div className="caret"></div>
                        </div>
                        <div className="filter-content dropdown-content">
                          <div className="dropdown-wrapper">
                            <div className="data arrow_box ulscrollable">
                              <div className="clearfix filter" data-filter-name="material" data-group="material">
                                <div className="filter-header">
                                  <span className="filter-name">Material</span>
                                  <span className="clear filter-clear hide">
                                    Clear
                                  </span>
                                </div>
                                <ul className="clearfix options" data-filter-name="material">
                                  <li className="option " data-option-key="Solid_Wood" data-option-name="Solid Wood">
                                    <input type="checkbox" name="filters[material][]" id="filters_material_Solid_Wood"
                                      value="Solid Wood" />
                                    <label className="name " for="filters_material_Solid_Wood">Solid Wood
                                    </label>
                                  </li>
                                  <li className="option " data-option-key="Engineered_Wood"
                                    data-option-name="Engineered Wood">
                                    <input type="checkbox" name="filters[material][]"
                                      id="filters_material_Engineered_Wood" value="Engineered Wood" />
                                    <label className="name " for="filters_material_Engineered_Wood">Engineered Wood
                                    </label>
                                  </li>
                                  <li className="option " data-option-key="Engineering_Wood"
                                    data-option-name="Engineering Wood">
                                    <input type="checkbox" name="filters[material][]"
                                      id="filters_material_Engineering_Wood" value="Engineering Wood" />
                                    <label className="name " for="filters_material_Engineering_Wood">Engineering Wood
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              <div className="options availability filter" data-filter-name="availability" data-group="Availability">
                <div className="option" data-option-key="In Stock Only" data-option-name="In Stock Only">
                  <input type="checkbox" name="filters[availability][]" id="filters_availability_In_Stock_Only"
                    value="In Stock Only" />
                  <label className="name " for="filters_availability_In_Stock_Only">Exclude Out Of Stock
                  </label>
                </div>

              </div>
            </form>
            <div className="sort-box">
              <div>
                <div className="grouplist sort">
                  <div className="page-label">Sort By</div>
                  <div className="item title" data-group="sorting">
                    <div className="gname">
                      <span>Recommended</span>
                      <div className="caret"></div>
                    </div>
                    <div className="filter-content dropdown-content">
                      <div className="dropdown-wrapper">
                        <div className="data arrow_box">
                          <ul className="sortoptions" data-taxon="Crockery Units">
                            <li className="selected" data-key="default">Recommended</li>
                            <li className="option" data-key="price_asc">Price: Low to High</li>
                            <li className="option" data-key="price_desc">Price: High to Low</li>
                            <li className="option" data-key="new_arrival">New Arrivals</li>
                            <li className="option" data-key="discount_perc_desc">Discount</li>
                          </ul>
                          <form id="sort-option-form">
                            <input type="hidden" name="sort" id="sort" value="default" disabled="disabled" />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="selected-options">
          <div className="hide optionslist row">
            <ul className="list">
            </ul>
          </div>
        </div>


      </div>
    </div>
  )
}

export default FilterMain;
