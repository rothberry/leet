-- Use 'show tables' to see tables
/*

CAMPAIGNS
ID  | NAME
----------
111 | Campaign One
222 | Campaign Two
333 | Campaign Three
444 | Campaign Four





ADS

DATE       | CAMPAIGN_ID | PLACEMENT_ID | ADS
-----------------------------------------------
2019-01-01 | 111         | 22           | 50
2019-02-15 | 222         | 33           | 450
2019-02-03 | 111         | 22           | 25
2019-02-15 | 222         | 22           | 100   
2019-02-15 | 333         | 22           | 600
2019-01-24 | 333         | 33           | 200
2019-02-10 | 111         | 44           | 500
2019-01-01 | 111         | 22           | 475
            

Find all campaign names for 
which total ads served >= 500, for each day"

2019-02-15 | Campaign Three | 600 
2019-02-10 | Campaign One | 500 


============



*/

SELECT ads.date as date, campaign.names as names, finalCount
FROM 
  CAMPAIGNS campaign
  inner join ADS ads
  on campaign.id = ads.id;
where 
  -- if date and campaign_id of row are equal, then sum the ads column
  group by date, ads.campaign_id sum ads.ads as finalCount
  finalCount >= 500;

-- Your last JavaScript (Node) code is saved below:

-- /* Write an efficient program for printing k largest elements 
-- in an array. 
-- Elements in array can be in any order.

-- For example, if given array is [1, 23, 12, 9, 30, 2, 50] 
-- and you are asked for the largest 3 elements i.e.
-- k = 3 then your program should print 50, 30 and 23.



-- */

  

-- const getKLargestElements = (arr, k) => {
--   // start with an unsorted arr
--   // return arr of length k of max values in desc order
--   //  
--   //   if ( a > b ) return -1
--   //   if ( a < b ) return 1
--   // })
--   // return arr.slice(0, k) 
  
   
--   return customSort(arr).slice(0, k)
-- }

-- // [1, 23, 12, 9, 30, 2, 50] 
-- // [50, 23, 12, 9, 23 , 2, x] 
-- // [50, 30, 12, 9, x, 2, x] 
-- const customSort = arr => {
  
--   for (let i = 0; i < arr.length; i++) {
--     for (let j = i+1; j < arr.length; j++) {
--       if (arr[i] < arr[j]) {
--         // console.log('one', arr[i], arr[j])
--         let temp = arr[i]
--         arr[i] = arr[j]
--         arr[j] = temp
--         // console.log('two', arr[i], arr[j])
--       }
--     } 
--   }
--   console.log(arr)
--   return arr
-- }
-- console.log(getKLargestElements([1,23,12,9,30,2,50], 3))