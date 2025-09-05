import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GalleryApp() {
  const [images, setImages] = useState([
    { id: 1, src: "https://source.unsplash.com/random/800x600?nature", title: "山景", tags: ["自然", "山"] },
    { id: 2, src: "https://source.unsplash.com/random/800x600?city", title: "城市", tags: ["建筑"] },
    { id: 3, src: "https://source.unsplash.com/random/800x600?cat", title: "可爱猫咪", tags: ["动物"] },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <header className="sticky top-0 z-10 bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          我的相册
        </h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索图片..."
              className="pl-10 pr-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <Button className="rounded-xl flex items-center gap-2">
            <Upload className="h-4 w-4" /> 上传
          </Button>
        </div>
      </header>

      {/* 图片网格 */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <img src={img.src} alt={img.title} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h2 className="font-semibold text-lg">{img.title}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {img.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-sm bg-indigo-100 text-indigo-600 rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </main>
    </div>
  );
}
