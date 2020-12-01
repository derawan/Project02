
        Product = [
            {"sku":"SKU-0001", "name":"Produk 01","price":820},
            {"sku":"SKU-0002", "name":"Produk 02","price":430},
            {"sku":"SKU-0003", "name":"Produk 03","price":510},
            {"sku":"SKU-0004", "name":"Produk 04","price":140},
            {"sku":"SKU-0005", "name":"Produk 05","price":880},
            {"sku":"SKU-0006", "name":"Produk 06","price":170},
            {"sku":"SKU-0007", "name":"Produk 07","price":740},
            {"sku":"SKU-0008", "name":"Produk 08","price":130},
            {"sku":"SKU-0009", "name":"Produk 09","price":770},
            {"sku":"SKU-0010", "name":"Produk 10","price":340},
            {"sku":"SKU-0011", "name":"Produk 11","price":930},
            {"sku":"SKU-0012", "name":"Produk 12","price":730},
            {"sku":"SKU-0013", "name":"Produk 13","price":860},
            {"sku":"SKU-0014", "name":"Produk 14","price":500},
            {"sku":"SKU-0015", "name":"Produk 15","price":830},
            {"sku":"SKU-0016", "name":"Produk 16","price":270},
            {"sku":"SKU-0017", "name":"Produk 17","price":400},
            {"sku":"SKU-0018", "name":"Produk 18","price":400},
            {"sku":"SKU-0019", "name":"Produk 19","price":110},
            {"sku":"SKU-0020", "name":"Produk 20","price":730},
            {"sku":"SKU-0021", "name":"Produk 21","price":200},
            {"sku":"SKU-0022", "name":"Produk 22","price":340},
            {"sku":"SKU-0023", "name":"Produk 23","price":430},
            {"sku":"SKU-0024", "name":"Produk 24","price":750},
            {"sku":"SKU-0025", "name":"Produk 25","price":530},
            {"sku":"SKU-0026", "name":"Produk 26","price":340},
            {"sku":"SKU-0027", "name":"Produk 27","price":650},
            {"sku":"SKU-0028", "name":"Produk 28","price":530},
            {"sku":"SKU-0029", "name":"Produk 29","price":550},
            {"sku":"SKU-0030", "name":"Produk 30","price":990},
            {"sku":"SKU-0031", "name":"Produk 31","price":150},
            {"sku":"SKU-0032", "name":"Produk 32","price":140}

        ];

        
        function CalculateTotal()
        {
            // grab all td with class total
            var totalel = $('.total');
            var total = 0;
            for(i=0;i<totalel.length;i++)
            {
                    total_str = $(totalel[i]).text();
                    total = total + parseInt(total_str);
            }

            $('.sum').text(total);
        }


        $(
                function() {

                    searchboxEl = $('.searchbox');
                    //console.log(searchboxEl)
                    // searchboxEl.on('keypress', (eb)=>{
                    //     var inpEl = $(eb.target);
                    //     //console.log(inpEl);
                    //     var keydipilih = eb.key;
                    //     console.log(keydipilih);
                    //     if (keydipilih == 'Enter')
                    //     {
                    //         var nilai_dicari = inpEl.val();
                    //         var el = $(`option[value="${nilai_dicari}"]`);
                    //         var attr = el.attr('data-item');
                    //         console.log(attr);
                    //     }
                    // })

                    // searchboxEl.on('keypress',(e)=>{
                    //     var keypress = e.key;
                    //     var inputEl = $(e.target);
                    //     if (keypress == 'Enter')
                    //     {
                    //         var katadicari = inputEl.val();
                    //         var ketemu = false;
                    //         var indeks = 0;
                    //         hasil = null;
                    //         while(!ketemu) {

                    //             if (Product[indeks].sku==katadicari)
                    //             {
                    //                 ketemu = true;
                    //                 hasil = Product[indeks]
                    //             }
                    //             indeks++;
                    //             if (indeks >= Product.length)
                    //             {
                    //                 ketemu = true;
                    //             }
                    //         }
                    //         if (hasil!= null) {
                    //             $('.product_selector').val(hasil.sku);
                    //             $('.product_selector').trigger('change')
                    //         }
                    //         inputEl.val('')
                    //     }
                    // })

                    // searchboxEl.on('keypress',(e)=>{
                    //     var keypress = e.key;
                    //     var inputEl = $(e.target);
                    //     if (keypress == 'Enter')
                    //     {
                    //         var katadicari = inputEl.val();
                            
                    //             $('.product_selector').val(katadicari);
                    //             $('.product_selector').trigger('change')
                    //         inputEl.val('')
                    //     }
                    // })
                    

                    // search combo .product_selector
                    var product_selector_el = $('.product_selector , .searchbox');
                    //console.log(product_selector_el)
                    // add product item into select box
                    for(a in Product)
                    {
                        var optionEl = $(`<option value="${Product[a].sku}">${Product[a].name + ' (' + Product[a].sku + ')'}</option>`)
                        // get the item from this loop
                        var  item = Product[a];
                        // attach this item as attribut for this element, but first convert to json  string
                        optionEl.attr('data-item', JSON.stringify(item))
                        optionEl.appendTo(product_selector_el)
                    }


                    product_selector_el.on('change', (ex) =>{
                            var product_combo  = ex.target;
                            
                            
                            var product_combo_el = $(product_combo)
                            

                            //console.log(product_combo)
                            var selected_value = product_combo_el.val();
                            if (product_combo_el.hasClass('searchbox')) {
                                $('.product_selector').val(selected_value);
                                $('.product_selector').trigger('change');
                            }
                            else {
// search option under this combo who has value = selected
var selected_option = product_combo_el.find(`[value="${selected_value}"]`)
                           //console.log(selected_option)
                            var selected_item_str = selected_option.attr('data-item');
                           // console.log(selected_item_str)
                             var selected_item = JSON.parse(selected_item_str);
                            //console.log(selected_item)

                            // lets build our table item
                            var tabelEl = $('.table_body');
                            //console.log(tabelEl)
                            // lets make table row item
                            var tr = $('<tr></tr>');
                            tr.appendTo(tabelEl);

                            // lets make column for this row
                            //  column for action
                            var tdActionEl = $('<td></td>');
                            tdActionEl.appendTo(tr);

                            // lets add a button 
                            var btnActionEl = $('<button style="width:100%">Hapus</button>')
                            btnActionEl.appendTo(tdActionEl)
                            // lets add event to this btn
                            btnActionEl.on('click', (e)=>{
                                    var selButton = e.target;
                                    var selButtonEl = $(selButton);
                                    var rowWillbeDeleted = selButtonEl
                                                            .parent()    // td
                                                            .parent();   // tr
                                    rowWillbeDeleted.remove();
                                    CalculateTotal();
                            })


                            //  column for sku
                            var tdSKUEl = $(`<td>${selected_item.sku}</td>`);
                            tdSKUEl.appendTo(tr);

                            //  column for name
                            var tdNameEl = $(`<td class="nama">${selected_item.name}</td>`);
                            tdNameEl.appendTo(tr);

                            //  column for qty
                            var tdQtyEl = $(`<td class="qty"></td>`);
                            tdQtyEl.appendTo(tr);

                            var inpQtyEl = $(`<input value="1" style="width:100%;text-align:right"/>`)
                            inpQtyEl.appendTo(tdQtyEl);

                            // lets add event here 
                            inpQtyEl.on('keyup',(ey)=>{
                                    var inp = ey.target;
                                    var inpEl = $(inp);
                                    var qty = inpEl.val();
                                    dodol = ey;
                                    console.log(ey);
                                    //console.log(qty);
                                    
                                    var price_Str = inpEl
                                        .parent() // td
                                        .next()    // prev
                                        .text()
                                        //console.log(price)
                                    var qtyValue = 0;
                                    qtyValue = parseInt(qty);
                                    // unknownobject.make();
                                    // try {
                                    //     unknownobject.make();
                                    // }
                                    // catch(c)
                                    // {
                                    //     //alert('error bro should be number')
                                    //     console.log(c);
                                    // }

                                    var total_baru = qtyValue * parseInt(price_Str);
                                    total_baru = isNaN(total_baru)?0:total_baru;
                                    inpEl
                                        .parent() // td
                                        .next()    // prev
                                        .next()
                                        .text(total_baru)

                                        CalculateTotal();
                            })

                            //  column for price
                            var tdPriceEl = $(`<td class="price">${selected_item.price}</td>`);
                            tdPriceEl.appendTo(tr);



                            //  column for total
                            var tdTotalEl = $(`<td class="total" style="text-align:right">${1* selected_item.price}</td>`);
                            tdTotalEl.appendTo(tr);

                            CalculateTotal();
                            }
                           

                    })
                }

        )
 