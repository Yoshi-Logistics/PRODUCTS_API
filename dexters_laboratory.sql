-- SELECT products.*, json_agg(
--     json_build_object(
--       'feature', features.feature,
--       'value', features.value
--     )
--   ) AS features
--     FROM products JOIN features
--     ON products.id=features.product_id
--     WHERE products.id=$1
--     GROUP BY products.id
