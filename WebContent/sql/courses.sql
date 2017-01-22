SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for courses
-- ----------------------------
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(50) default NULL,
  `briefInfo` varchar(200) default NULL,
  `detailInfo` varchar(400) default NULL,
  `difficulty` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of courses
-- ----------------------------
INSERT INTO `courses` VALUES ('1', '数据结构', '数据结构是指相互之间存在着一种或多种关系的数据元素的集合和该集合中数据元素之间的关系组成。', '数据结构是计算机存储、组织数据的方式。数据结构是指相互之间存在一种或多种特定关系的数据元素的集合。通常情况下，精心选择的数据结构可以带来更高的运行或者存储效率。数据结构往往同高效的检索算法和索引技术有关。', '0');
INSERT INTO `courses` VALUES ('2', '算法', '算法是指解题方案的准确而完整的描述，是一系列解决问题的清晰指令。', '算法代表着用系统的方法描述解决问题的策略机制，能够对一定规范的输入，在有限时间内获得所要求的输出。不同的算法可能用不同的时间、空间或效率来完成同样的任务', '0');
INSERT INTO `courses` VALUES ('3', '操作系统', '操作系统是管理和控制计算机硬件与软件资源的计算机程序。', '操作系统是用户和计算机的接口，同时也是计算机硬件和其他软件的接口，是直接运行在“裸机”上的最基本的系统软件，任何其他软件都必须在操作系统的支持下才能运行。', '0');
INSERT INTO `courses` VALUES ('4', '软件工程', '软件工程是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。', '软件工程是应用计算机科学、数学、逻辑学及管理科学等原理，开发软件的工程。软件工程借鉴传统工程的原则、方法，以提高质量、降低成本和改进算法。', '0');
INSERT INTO `courses` VALUES ('5', '分布式计算', '分布式计算是一种计算方法，和集中式计算是相对的。', '分布式计算是一门计算机科学，它研究如何把一个需要非常巨大的计算能力才能解决的问题分成许多小的部分，然后把这些部分分配给许多计算机进行处理，最后把这些计算结果综合起来得到最终的结果。', '0');
INSERT INTO `courses` VALUES ('6', '大数据', '大数据是一种规模大到在获取、存储、管理、分析方面大大超出了传统数据库软件工具能力范围的数据集合。', '大数据指无法在一定时间范围内用常规软件工具进行捕捉、管理和处理的数据集合，是需要新处理模式才能具有更强的决策力、洞察发现力和流程优化能力的海量、高增长率和多样化的信息资产。', '0');
INSERT INTO `courses` VALUES ('7', '机器学习', '机器学习是一涉及概率论、统计学、逼近论、凸分析、算法复杂度理论等的多领域交叉学科。', '机器学习专门研究计算机怎样模拟或实现人类的学习行为，以获取新的知识或技能，重新组织已有的知识结构使之不断改善自身的性能。', '0');
INSERT INTO `courses` VALUES ('8', '人工智能', '人工智能是是研究、开发用于模拟、延伸和扩展人的智能的理论、方法、技术及应用系统的一门技术科学。', '人工智能是计算机科学的一个分支，它企图了解智能的实质，并生产出一种新的能以人类智能相似的方式做出反应的智能机器，该领域的研究包括机器人、语言识别、图像识别、自然语言处理和专家系统等。', '0');
INSERT INTO `courses` VALUES ('9', '云计算', '云计算是基于互联网的相关服务的增加、使用和交付模式。', '云计算是一种按使用量付费的模式，这种模式提供可用的、便捷的、按需的网络访问， 进入可配置的计算资源共享池（资源包括网络，服务器，存储，应用软件，服务）。', '0');